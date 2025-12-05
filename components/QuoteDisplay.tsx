// components/QuoteDisplay.tsx

'use client';

type QuoteDisplayProps = {
  quote: {
    cost: string;
    time: string;
    deviceId: string;
    status: string;
    assessment: string;
    formData?: {
      userName: string;
      userEmail: string;
      deviceType: string;
      deviceBrand: string;
      deviceModel: string;
    };
    deviceInfo?: {
      deviceName: string;
      deviceType: string;
      specifications?: any;
      brand?: string;
      model?: string;
      description?: string;
      image?: string;
    };
  };
};

export default function QuoteDisplay({ quote }: QuoteDisplayProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'repairable': return 'bg-green-100 text-green-800';
      case 'assessment': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'repairable': return 'fa-check-circle';
      case 'assessment': return 'fa-hourglass-half';
      case 'pending': return 'fa-clock';
      default: return 'fa-question-circle';
    }
  };

  return (
    <div className="space-y-6">
      {/* Quote Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <i className="fas fa-dollar-sign text-blue-600"></i>
            </div>
            <div>
              <div className="text-xs text-blue-600 font-semibold uppercase tracking-wide">ESTIMATED COST</div>
              <div className="text-2xl font-bold text-gray-900">{quote.cost}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Diagnostic fee may apply</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-purple-100 rounded-lg mr-3">
              <i className="fas fa-clock text-purple-600"></i>
            </div>
            <div>
              <div className="text-xs text-purple-600 font-semibold uppercase tracking-wide">TURNAROUND TIME</div>
              <div className="text-2xl font-bold text-gray-900">{quote.time}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">From diagnostic to completion</p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-xl border border-gray-200">
          <div className="flex items-center mb-3">
            <div className="p-2 bg-gray-100 rounded-lg mr-3">
              <i className="fas fa-microchip text-gray-600"></i>
            </div>
            <div>
              <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">DEVICE ID</div>
              <div className="text-lg font-mono font-bold text-gray-900 truncate">{quote.deviceId}</div>
            </div>
          </div>
          <p className="text-sm text-gray-600">Your unique reference</p>
        </div>
      </div>

      {/* Status Badge */}
      <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
        <div>
          <h4 className="font-medium text-gray-700">Repair Status</h4>
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mt-2 ${getStatusColor(quote.status)}`}>
            <i className={`fas ${getStatusIcon(quote.status)} mr-2`}></i>
            {quote.status.toUpperCase()}
          </span>
        </div>
        <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
          <i className="fas fa-download mr-2"></i>
          Download Quote PDF
        </button>
      </div>

      {/* Assessment Details */}
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
          <h4 className="font-medium text-gray-700 flex items-center">
            <i className="fas fa-clipboard-check text-green-600 mr-2"></i>
            TECHNICAL ASSESSMENT
          </h4>
        </div>
        <div className="p-5">
          <p className="text-gray-700">{quote.assessment}</p>
        </div>
      </div>

      {/* Device Information */}
      {quote.formData && quote.deviceInfo && (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
            <h4 className="font-medium text-gray-700 flex items-center">
              <i className="fas fa-laptop text-blue-600 mr-2"></i>
              DEVICE INFORMATION
            </h4>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium text-gray-500 mb-2">CUSTOMER DETAILS</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <i className="fas fa-user text-gray-400 mr-2 w-4"></i>
                    <span className="text-gray-700">{quote.formData.userName}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-gray-400 mr-2 w-4"></i>
                    <span className="text-gray-700">{quote.formData.userEmail}</span>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-sm font-medium text-gray-500 mb-2">DEVICE DETAILS</h5>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <i className="fas fa-mobile-alt text-gray-400 mr-2 w-4"></i>
                    <span className="text-gray-700">{quote.deviceInfo.deviceName}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-tag text-gray-400 mr-2 w-4"></i>
                    <span className="text-gray-700 capitalize">{quote.formData.deviceType}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center">
          <i className="fas fa-calendar-check mr-2"></i>
          Schedule Repair
        </button>
        <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all duration-300 flex items-center">
          <i className="fas fa-question-circle mr-2"></i>
          Ask Questions
        </button>
        <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center">
          <i className="fas fa-share-alt mr-2"></i>
          Share Quote
        </button>
      </div>
    </div>
  );
}
