'use client';

import { useState, useEffect } from 'react';
import DeviceForm from '@/components/DeviceForm';
import QuoteDisplay from '@/components/QuoteDisplay';
import SubmissionsList from '@/components/SubmissionsList';
import { fetchDeviceInfo, fetchPhoneSpecs } from '@/lib/api';

export default function Home() {
  const [submissions, setSubmissions] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Load submissions from localStorage on initial render
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('deviceSubmissions');
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    
    try {
      // Get device information from real API
      let deviceInfo = {};
      
      if (formData.deviceType === 'smartphone' && formData.deviceBrand && formData.deviceModel) {
        try {
          // Try to get phone specs from DeviceSpecifications API
          deviceInfo = await fetchPhoneSpecs(formData.deviceBrand, formData.deviceModel);
        } catch (error) {
          console.log('Could not fetch phone specs, using fallback');
        }
      }
      
      // If no API data, create basic device info
      if (!deviceInfo || Object.keys(deviceInfo).length === 0) {
        deviceInfo = {
          deviceName: `${formData.deviceBrand} ${formData.deviceModel}`,
          deviceType: formData.deviceType,
          specifications: 'Details not available from API',
        };
      }

      // Generate a repair quote
      const quote = generateRepairQuote(formData, deviceInfo);

      const newSubmission = {
        id: Date.now().toString(),
        ...formData,
        deviceInfo,
        quote,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      // Update state
      const updatedSubmissions = [newSubmission, ...submissions];
      setSubmissions(updatedSubmissions);
      setCurrentQuote({ ...quote, formData, deviceInfo });

      // Save to localStorage
      localStorage.setItem('deviceSubmissions', JSON.stringify(updatedSubmissions));

    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateRepairQuote = (formData, deviceInfo) => {
    const issue = formData.deviceIssue.toLowerCase();
    let assessment, cost, time, status;

    // Realistic repair quote logic
    if (issue.includes('screen') || issue.includes('display') || issue.includes('crack')) {
      assessment = 'Screen replacement needed. Common repair with high success rate.';
      cost = formData.deviceType === 'smartphone' ? '$89 - $249' :
             formData.deviceType === 'tablet' ? '$129 - $399' :
             formData.deviceType === 'laptop' ? '$199 - $599' : '$149 - $499';
      time = '1-2 business days';
      status = 'repairable';
    } else if (issue.includes('battery') || issue.includes('charge')) {
      assessment = 'Battery replacement required. Standard procedure with OEM or high-quality replacement.';
      cost = '$69 - $199';
      time = '1 business day';
      status = 'repairable';
    } else if (issue.includes('water') || issue.includes('liquid')) {
      assessment = 'Water damage assessment needed. Requires diagnostic to determine extent of damage.';
      cost = '$49 (diagnostic) + repair cost';
      time = '3-5 business days';
      status = 'assessment';
    } else if (issue.includes('motherboard') || issue.includes('logic board')) {
      assessment = 'Complex motherboard repair. Requires specialized equipment and testing.';
      cost = '$199 - $899';
      time = '5-7 business days';
      status = 'repairable';
    } else if (issue.includes('software') || issue.includes('os') || issue.includes('update')) {
      assessment = 'Software issue. Can typically be resolved with diagnostic and software repair.';
      cost = '$49 - $149';
      time = '1 business day';
      status = 'repairable';
    } else {
      assessment = 'General repair needed. Requires diagnostic to provide accurate quote.';
      cost = '$49 (diagnostic fee)';
      time = '2-3 business days';
      status = 'assessment';
    }

    // Adjust cost based on device brand
    if (formData.deviceBrand === 'apple') {
      cost = `$${parseInt(cost.replace('$', '').split(' - ')[0]) + 50} - $${parseInt(cost.replace('$', '').split(' - ')[1]) + 100}`;
    }

    return {
      assessment,
      cost,
      time,
      status,
      deviceId: `DEV-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    };
  };

  const handleRespond = (submissionId) => {
    const submission = submissions.find(s => s.id === submissionId);
    if (submission) {
      alert(`Response sent to ${submission.userEmail} for ${submission.deviceInfo.deviceName}`);
    }
  };

  const handleUpdateStatus = (submissionId, newStatus) => {
    const updatedSubmissions = submissions.map(submission => {
      if (submission.id === submissionId) {
        return { ...submission, status: newStatus };
      }
      return submission;
    });
    setSubmissions(updatedSubmissions);
    localStorage.setItem('deviceSubmissions', JSON.stringify(updatedSubmissions));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-laptop-medical text-blue-600 mr-3"></i>
            Device Information
          </h2>
          <DeviceForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-file-invoice-dollar text-purple-600 mr-3"></i>
            Repair Quote
          </h2>
          {currentQuote ? (
            <QuoteDisplay quote={currentQuote} />
          ) : (
            <div className="text-center py-8">
              <i className="fas fa-search text-gray-300 text-4xl mb-4"></i>
              <p className="text-gray-600">Submit a device to see your repair quote here</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <i className="fas fa-history text-blue-600 mr-3"></i>
          Recent Submissions
        </h2>
        <SubmissionsList
          submissions={submissions}
          onRespond={handleRespond}
          onUpdateStatus={handleUpdateStatus}
        />
      </div>
    </div>
  );
}
