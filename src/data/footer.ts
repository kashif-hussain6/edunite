import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import type { FooterData } from '@/types';

export const footerData: FooterData = {
  company: {
    name: 'Edunite',
    description: 'Empowering educational institutions worldwide with comprehensive school management solutions that drive academic excellence.',
    logo: GraduationCap
  },
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Modules', href: '#modules' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '/demo' },
        { label: 'API', href: '/api' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help-center' },
        { label: 'Documentation', href: '/documentation' },
        { label: 'Training', href: '/training' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Status', href: '/status' }
      ]
    }
  ],
  contact: {
    email: 'hello@edunite.com',
    phone: '+1 (555) 123-4567',
    address: {
      line1: '123 Education Street',
      line2: 'Learning City, LC 12345'
    }
  },
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/edunite',
      icon: Facebook
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/edunite',
      icon: Twitter
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/edunite',
      icon: Linkedin
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/edunite',
      icon: Instagram
    }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' }
  ],
  copyright: '© 2024 Edunite. All rights reserved.'
};
