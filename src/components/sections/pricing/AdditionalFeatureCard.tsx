import React from 'react';
import type { AdditionalFeature } from '@/types/pricing';

interface AdditionalFeatureCardProps {
  feature: AdditionalFeature;
  animationDelayMs?: number;
}

const AdditionalFeatureCard: React.FC<AdditionalFeatureCardProps> = ({ feature, animationDelayMs = 0 }) => {
  return (
    <div
      className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-in"
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <div className="text-3xl mb-3">{feature.icon}</div>
      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
      <p className="text-gray-600 text-sm">{feature.description}</p>
    </div>
  );
};

export default AdditionalFeatureCard;


