// components/QuoteDisplay.js

'use client';

export default function QuoteDisplay({ quote }) {
  if (!quote) return null;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'repairable':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <i className="fas fa-check-circle mr-1"></i> Repairable
          </span>
        );
      case 'not-repairable':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <i className="fas fa-times-circle mr-1"></i> Not Repairable
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
            <i className="fas fa-hourglass-half mr-1"></i> Assessment Needed
          </span>
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-blue-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          <i className="fas fa-file-invoice text-blue-600 mr-2"></i>
          Repair Quote Details
        </h3>
        {getStatusBadge(quote.status)}
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <i className="fas fa-laptop text-purple-500 mr-2"></i>
            Device Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <span className="text-sm text-gray-500">Device:</span>
              <p className="font-medium">{quote.formData?.deviceBrand} {quote.formData?.deviceModel}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Type:</span>
              <p className="font-medium capitalize">{quote.formData?.deviceType}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Device ID:</span>
              <p className="font-mono text-sm bg-gray-100 p-1 rounded">{quote.deviceId}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">Submitted:</span>
              <p className="font-medium">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
            <i className="fas fa-tools text-blue-500 mr-2"></i>
            Issue Assessment
          </h4>
          <p className="text-gray-700">{quote.assessment}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center mb-2">
              <i className="fas fa-dollar-sign text-green-600 mr-2"></i>
              <span className="text-sm font-medium text-gray-700">Estimated Cost</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{quote.cost}</p>
            <p className="text-xs text-gray-600 mt-1">Includes parts and labor</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <div className="flex items-center mb-2">
              <i className="fas fa-clock text-purple-600 mr-2"></i>
              <span className="text-sm font-medium text-gray-700">Turnaround Time</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{quote.time}</p>
            <p className="text-xs text-gray-600 mt-1">Excluding shipping if applicable</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
            <div className="flex items-center mb-2">
              <i className="fas fa-percentage text-green-600 mr-2"></i>
              <span className="text-sm font-medium text-gray-700">Success Rate</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">
              {quote.status === 'repairable' ? '95%' : quote.status === 'assessment' ? '75%' : '50%'}
            </p>
            <p className="text-xs text-gray-600 mt-1">Based on similar repairs</p>
          </div>
        </div>

        {quote.deviceInfo?.specifications && (
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-700 mb-3 flex items-center">
              <i className="fas fa-info-circle text-gray-500 mr-2"></i>
              Device Specifications
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {Object.entries(quote.deviceInfo.specifications).map(([key, value]) => (
                <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="font-medium text-gray-800">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg">
            <i className="fas fa-print mr-2"></i>
            Print Quote
          </button>
          <button className="px-5 py-2.5 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
            <i className="fas fa-envelope mr-2"></i>
            Email Quote
          </button>
        </div>
      </div>
    </div>
  );
}
