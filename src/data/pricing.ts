import { Brain, Shield, Users } from 'lucide-react';
import type { AdditionalFeature, FAQItem, PricingPlan } from '@/types/pricing';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small schools getting started',
    icon: Users,
    color: 'blue',
    students: 'Up to 200 students',
    monthlyPrice: 49,
    yearlyPrice: 490,
    savings: '17%',
    features: [
      'Student Management',
      'Basic Attendance Tracking',
      'Grade Recording',
      'Parent Communication',
      'Basic Reports',
      'Simple Timetable Creation',
      'Email Support',
      '5 GB Storage'
    ],
    notIncluded: [
      'AI Question Generation',
      'AI Answer Checker',
      'AI Flashcards',
      'Automated Reports',
      'Advanced Analytics',
      'Custom Branding',
      'API Access',
      'Priority Support'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'AI-powered solution for growing schools',
    icon: Brain,
    color: 'indigo',
    students: 'Up to 800 students',
    monthlyPrice: 149,
    yearlyPrice: 1490,
    savings: '17%',
    features: [
      'Everything in Starter',
      'AI Question Generation (500/month)',
      'AI Answer Checker',
      'AI Flashcards Creation',
      'Smart Timetable Generation',
      'Automated Report Generation',
      'Advanced Attendance System',
      'Comprehensive Gradebook',
      'Fee Management',
      'Library Management',
      'Transport Management',
      'Mobile App Access',
      'Priority Email Support',
      '50 GB Storage',
      'Custom Reports'
    ],
    notIncluded: [
      'Unlimited AI Features',
      'API Access',
      'Custom Branding',
      'Dedicated Support'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete AI-powered solution for large institutions',
    icon: Shield,
    color: 'purple',
    students: 'Unlimited students',
    monthlyPrice: 299,
    yearlyPrice: 2990,
    savings: '17%',
    features: [
      'Everything in Professional',
      'Unlimited AI Question Generation',
      'Advanced AI Answer Checker',
      'Unlimited AI Flashcards',
      'AI-Powered Analytics & Insights',
      'Multi-Campus Management',
      'Advanced Automated Reports',
      'Custom AI Model Training',
      'White-label AI Features',
      'Custom Branding',
      'API Access',
      'Single Sign-On (SSO)',
      'Advanced Security Features',
      'Dedicated Account Manager',
      '24/7 Phone Support',
      'Unlimited Storage',
      'Custom Integrations'
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact Sales'
  }
];

export const additionalFeatures: AdditionalFeature[] = [
  {
    title: 'AI-Powered Learning',
    description: 'Advanced AI features for personalized education experiences',
    icon: '🤖'
  },
  {
    title: '99.9% Uptime',
    description: 'Guaranteed reliability with enterprise-grade infrastructure',
    icon: '⚡'
  },
  {
    title: 'FERPA Compliant',
    description: 'Full compliance with educational data privacy regulations',
    icon: '🔒'
  },
  {
    title: '30-Day Free Trial',
    description: 'Try all AI features risk-free for 30 days',
    icon: '🎯'
  }
];

export const faqs: FAQItem[] = [
  {
    question: 'How do AI features work?',
    answer:
      'Our AI features use advanced machine learning to generate questions, check answers, create flashcards, and provide intelligent insights automatically.'
  },
  {
    question: 'Can I change plans anytime?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. AI feature limits adjust immediately with your new plan.'
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'No setup fees. We also provide free data migration, AI setup, and training for all plans.'
  },
  {
    question: 'What about AI data privacy?',
    answer:
      'All AI processing is FERPA compliant with encrypted data handling. Student data never leaves our secure infrastructure.'
  }
];


