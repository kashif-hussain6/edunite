import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Dr. Sarah Johnson',
    role: 'Principal',
    company: 'Greenwood Academy',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'Edunite has revolutionized how we manage our school. The student management system is incredibly intuitive, and our teachers love the integrated gradebook feature.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Riverside High School',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The implementation was smooth, and the support team was outstanding. We\'ve seen a 40% reduction in administrative overhead since switching to Edunite.',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Emily Rodriguez',
    role: 'Administrator',
    company: 'Pine Valley Elementary',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150&h=150',
    content: 'The parent communication portal has been a game-changer. Parents are more engaged than ever, and our communication efficiency has improved dramatically.',
    rating: 5
  }
];

export const testimonialsSection = {
  title: 'What School Leaders Say About Us',
  subtitle: 'Don\'t just take our word for it. Here\'s what educational professionals have to say about their experience with Edunite.',
  testimonials
};
