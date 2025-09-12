
'use client';

import React, { memo, useMemo } from 'react';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';
import { testimonialsSection } from '@/data/testimonials';
import TestimonialCard from './TestimonialCard';

const Testimonials = memo(() => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { elementRef: gridRef, visibleItems } = useStaggeredAnimation(
    testimonialsSection.testimonials.length, 
    200
  );

  const memoizedTestimonials = useMemo(() => testimonialsSection.testimonials, []);

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ${
            headerVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 
            id="testimonials-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {testimonialsSection.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonialsSection.subtitle}
          </p>
        </header>
        
        <div 
          ref={gridRef} 
          className="grid md:grid-cols-3 gap-8"
          role="list"
          aria-label="Customer testimonials"
        >
          {memoizedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              isVisible={visibleItems.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
