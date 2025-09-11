import React from 'react';
import type { FAQItem } from '@/types/pricing';

interface FAQGridProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQGridProps> = ({ items }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
        {items.map((faq, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


