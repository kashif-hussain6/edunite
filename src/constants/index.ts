import { Users, GraduationCap, Calendar, DollarSign, Bus, Library, ChevronRight, Check } from 'lucide-react';
import { Module, ModuleColor, ColorClasses } from '@/types';


export const APP_CONFIG = {
  name: 'Edunite',
  version: '1.0.0',
  description: 'AI-Powered School Management Platform',
  url: 'https://edunite.com',
  supportEmail: 'support@edunite.com'
} as const;

export const ANIMATION_DELAYS = {
  stagger: 150,
  fadeIn: 200,
  slideIn: 300
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const;

export const ROUTES = {
  home: '/',
  features: '/#features',
  modules: '/#modules',
  testimonials: '/#testimonials',
  pricing: '/#pricing',
  blogs: '/blogs',
  login: '/login',
  signup: '/signup'
} as const;

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/edunite',
  linkedin: 'https://linkedin.com/company/edunite',
  facebook: 'https://facebook.com/edunite'
} as const;





export const modules: Module[] = [
  {
    id: 'students',
    icon: Users,
    title: 'Student Management',
    description: 'Complete student information system with comprehensive tracking',
    features: ['Student Registration & Enrollment', 'Academic Records Management', 'Attendance Tracking', 'Parent Communication Portal', 'Student Performance Analytics'],
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'blue'
  },
  {
    id: 'teachers',   
    icon: GraduationCap,
    title: 'Teacher Management',
    description: 'Empower your teaching staff with comprehensive tools',
    features: ['Teacher Profiles & Credentials', 'Class Assignment Management', 'Lesson Planning Tools', 'Grade Book Management', 'Professional Development Tracking'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'green'
  },
  {
    id: 'academic',
    icon: Calendar,
    title: 'Academic Management',
    description: 'Streamline academic operations and curriculum',
    features: ['Curriculum Management', 'Timetable Generation', 'Exam Scheduling', 'Grade Management', 'Report Card Generation'],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'purple'
  },
  {
    id: 'finance',
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Complete financial oversight and planning',
    features: ['Fee Management', 'Payment Processing', 'Financial Reporting', 'Budget Planning', 'Expense Tracking'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'orange'
  },
  {
    id: 'transport',
    icon: Bus,
    title: 'Transport Management',
    description: 'Safe and efficient transportation solutions',
    features: ['Route Management', 'Vehicle Tracking', 'Driver Management', 'Student Transport Assignment', 'GPS Integration'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'teal'
  },
  {
    id: 'library',
    icon: Library,
    title: 'Library Management',
    description: 'Digital library solutions and resource management',
    features: ['Book Catalog Management', 'Issue & Return Tracking', 'Digital Resources', 'Reading Analytics', 'Fine Management'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400',
    color: 'indigo'
  }
];

export const colorClasses: Record<ModuleColor, ColorClasses> = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'text-blue-600',
    accent: 'bg-blue-600',
    hover: 'hover:border-blue-300'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: 'text-green-600',
    accent: 'bg-green-600',
    hover: 'hover:border-green-300'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    icon: 'text-purple-600',
    accent: 'bg-purple-600',
    hover: 'hover:border-purple-300'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    icon: 'text-orange-600',
    accent: 'bg-orange-600',
    hover: 'hover:border-orange-300'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    icon: 'text-teal-600',
    accent: 'bg-teal-600',
    hover: 'hover:border-teal-300'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    icon: 'text-indigo-600',
    accent: 'bg-indigo-600',
    hover: 'hover:border-indigo-300'
  }
};


