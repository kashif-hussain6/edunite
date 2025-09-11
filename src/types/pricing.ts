import type { LucideIcon } from 'lucide-react';

export type BillingPeriod = 'monthly' | 'yearly';

export type PlanColor = 'blue' | 'indigo' | 'purple';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: PlanColor;
  students: string;
  monthlyPrice: number;
  yearlyPrice: number;
  savings: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
  cta: string;
}

export interface AdditionalFeature {
  title: string;
  description: string;
  icon: string; // emoji or small icon char
}

export interface FAQItem {
  question: string;
  answer: string;
}


