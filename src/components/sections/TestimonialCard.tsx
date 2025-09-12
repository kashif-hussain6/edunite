'use client';

import React, { memo, useMemo } from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  isVisible: boolean;
}

const TestimonialCard = memo<TestimonialCardProps>(({ testimonial, index, isVisible }) => {
  const stars = useMemo(() => 
    Array.from({ length: testimonial.rating }, (_, i) => (
      <Star 
        key={i} 
        className="h-5 w-5 fill-yellow-400 text-yellow-400" 
        aria-hidden="true"
      />
    )), 
    [testimonial.rating]
  );

  return (
    <article 
      className={`bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-500 ${
        isVisible
          ? 'opacity-100 transform translate-y-0 scale-100'
          : 'opacity-0 transform translate-y-12 scale-95'
      }`}
      role="article"
      aria-labelledby={`testimonial-title-${testimonial.id}`}
    >
      <Quote 
        className="h-8 w-8 text-blue-600 mb-6" 
        aria-hidden="true"
      />
      
      <div 
        className="flex mb-4" 
        role="img" 
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {stars}
      </div>
      
      <blockquote className="text-gray-700 mb-6 leading-relaxed">
        <p id={`testimonial-title-${testimonial.id}`} className="sr-only">
          Testimonial from {testimonial.name}
        </p>
        "{testimonial.content}"
      </blockquote>
      
      <footer className="flex items-center">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <Image
            src={testimonial.image}
            alt={`${testimonial.name}, ${testimonial.role}`}
            fill
            className="object-cover"
            sizes="48px"
            loading="lazy"
          />
        </div>
        <div>
          <div className="font-semibold text-gray-900">
            {testimonial.name}
          </div>
          <div className="text-gray-600 text-sm">
            {testimonial.role}
            {testimonial.company && (
              <span className="block">{testimonial.company}</span>
            )}
          </div>
        </div>
      </footer>
    </article>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default TestimonialCard;
