"use client";

import React from 'react';
import type { BillingPeriod } from '@/types/pricing';

interface BillingToggleProps {
  period: BillingPeriod;
  onToggle: (next: BillingPeriod) => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ period, onToggle }) => {
  const isYearly = period === 'yearly';

  return (
    <div className="flex items-center justify-center mb-8">
      <span className={`mr-3 transition-colors duration-200 ${!isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(isYearly ? 'monthly' : 'yearly')}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isYearly ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`ml-3 transition-colors duration-200 ${isYearly ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
        Yearly
      </span>
      {isYearly && (
        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 animate-fade-in">
          Save 17%
        </span>
      )}
    </div>
  );
};

export default BillingToggle;


