// components/SubmissionsList.js

'use client';

import { useState } from 'react';

export default function SubmissionsList({ submissions, onRespond, onUpdateStatus }) {
  const [filter, setFilter] = useState('all');

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'all') return true;
    if (filter === 'pending') return submission.status === 'pending';
    if (filter === 'replied') return submission.status === 'replied';
    if (filter === 'repairable') return submission.quote?.status === 'repairable';
    if (filter === 'assessment') return submission.quote?.status === 'assessment';
    return true;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'repairable': return 'bg-green-100 text-green-800';
      case 'assessment': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      case 'replied': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'repairable': return 'fa-check-circle';
      case 'assessment': return 'fa-hourglass-half';
      case 'pending': return 'fa-clock';
      case 'replied': return 'fa-reply';
      default: return 'fa-question-circle';
    }
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex items-center space-x-2">
          <i className="fas fa-filter text-gray-500"></i>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Submissions</option>
            <option value="pending">Pending Response</option>
            <option value="replied">Replied</option>
            <option value="repairable">Repairable</option>
            <option value="assessment">Needs Assessment</option>
          </select>
        </div>
        <div className="text-sm text-gray-600">
          <i className="fas fa-database mr-1"></i>
          {submissions.length} total submissions
        </div>
      </div>

      {filteredSubmissions.length === 0 ? (
        <div className="text-center py-12">
          <i className="fas fa-inbox text-gray-300 text-4xl mb-4"></i>
          <p className="text-gray-600">No submissions found</p>
          <p className="text-gray-500 text-sm mt-2">
            {filter !== 'all' ? 'Try changing your filter' : 'Submit a device to see it here'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredSubmissions.map((submission) => (
            <div key={submission.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 transition-colors duration-200">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {submission.deviceInfo?.deviceName || `${submission.deviceBrand} ${submission.deviceModel}`}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-600">
                          <i className="fas fa-user mr-1"></i>
                          {submission.userName}
                        </span>
                        <span className="text-sm text-gray-600">
                          <i className="fas fa-calendar mr-1"></i>
                          {new Date(submission.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(submission.quote?.status)}`}>
                      <i className={`fas ${getStatusIcon(submission.quote?.status)} mr-1`}></i>
                      {submission.quote?.status || 'pending'}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-1">
                      <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                      Issue Description
                    </h4>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {submission.deviceIssue}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-xs text-blue-600 font-medium mb-1">ESTIMATED COST</div>
                      <div className="text-lg font-bold text-gray-800">{submission.quote?.cost || 'Not quoted'}</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="text-xs text-purple-600 font-medium mb-1">TURNAROUND TIME</div>
                      <div className="text-lg font-bold text-gray-800">{submission.quote?.time || 'Not estimated'}</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-xs text-gray-600 font-medium mb-1">DEVICE ID</div>
                      <div className="font-mono text-sm text-gray-800 truncate">{submission.quote?.deviceId || 'N/A'}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 md:w-48">
                  <button
                    onClick={() => onRespond(submission.id)}
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
                  >
                    <i className="fas fa-reply mr-2"></i>
                    Respond
                  </button>

                  <div className="space-y-2">
                    <label className="text-xs text-gray-600 font-medium">Update Status:</label>
                    <select
                      value={submission.status || 'pending'}
                      onChange={(e) => onUpdateStatus(submission.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="pending">Pending Review</option>
                      <option value="diagnostic">Diagnostic Needed</option>
                      <option value="quoted">Quoted</option>
                      <option value="approved">Approved by Customer</option>
                      <option value="in-progress">Repair In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm">
                    <i className="fas fa-eye mr-2"></i>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
