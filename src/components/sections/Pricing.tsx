"use client";

import React, { useState } from 'react';
import type { BillingPeriod } from '@/types/pricing';
import { pricingPlans, additionalFeatures, faqs } from '@/data/pricing';
import BillingToggle from '@/components/sections/pricing/BillingToggle';
import PricingCard from '@/components/sections/pricing/PricingCard';
import AdditionalFeatureCard from '@/components/sections/pricing/AdditionalFeatureCard';
import FAQGrid from '@/components/sections/pricing/FAQ';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered School Management Pricing</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your school with advanced AI features. All plans include core functionality
            with AI enhancements available in Professional and Enterprise tiers.
          </p>
          <BillingToggle period={billingPeriod} onToggle={setBillingPeriod} />
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} period={billingPeriod} animationDelayMs={index * 100} />
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {additionalFeatures.map((feature, index) => (
            <AdditionalFeatureCard key={feature.title} feature={feature} animationDelayMs={300 + index * 100} />
          ))}
        </div>

        {/* FAQ Section */}
        <FAQGrid items={faqs} />
      </div>
    </section>
  );
};

export default Pricing;


