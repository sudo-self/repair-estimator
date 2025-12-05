// components/DeviceForm.js
'use client';

import { useState } from 'react';

export default function DeviceForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    deviceType: '',
    deviceBrand: '',
    deviceModel: '',
    deviceIssue: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      userName: '',
      userEmail: '',
      deviceType: '',
      deviceBrand: '',
      deviceModel: '',
      deviceIssue: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-user text-blue-500 mr-2"></i>
            Your Name
          </label>
          <input
            type="text"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-envelope text-blue-500 mr-2"></i>
            Email Address
          </label>
          <input
            type="email"
            id="userEmail"
            value={formData.userEmail}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your email for the quote"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-mobile-alt text-purple-500 mr-2"></i>
            Device Type
          </label>
          <select
            id="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select device type</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop Computer</option>
            <option value="smartwatch">Smartwatch</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="deviceBrand" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-tag text-purple-500 mr-2"></i>
            Device Brand
          </label>
          <select
            id="deviceBrand"
            value={formData.deviceBrand}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="">Select brand</option>
            <option value="apple">Apple</option>
            <option value="samsung">Samsung</option>
            <option value="google">Google</option>
            <option value="microsoft">Microsoft</option>
            <option value="dell">Dell</option>
            <option value="hp">HP</option>
            <option value="lenovo">Lenovo</option>
            <option value="sony">Sony</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-2">
            <i className="fas fa-microchip text-purple-500 mr-2"></i>
            Device Model
          </label>
          <input
            type="text"
            id="deviceModel"
            value={formData.deviceModel}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., iPhone 12, Galaxy S21"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="deviceIssue" className="block text-sm font-medium text-gray-700 mb-2">
          <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
          Describe the Issue
        </label>
        <textarea
          id="deviceIssue"
          value={formData.deviceIssue}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Please describe the problem with your device in detail..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <i className="fas fa-spinner fa-spin mr-2"></i>
            Processing...
          </>
        ) : (
          <>
            <i className="fas fa-paper-plane mr-2"></i>
            Submit for Quote
          </>
        )}
      </button>
    </form>
  );
}
