import type { NavigationItem } from '@/types';

export const navigationData: NavigationItem[] = [
  {
    id: 'features',
    label: 'Features',
    href: '/#features'
  },
  {
    id: 'modules',
    label: 'Modules',
    href: '/#modules'
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    href: '/#testimonials'
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: '/#pricing'
  },
  {
    id: 'blogs',
    label: 'Blogs',
    href: '/blogs',
    isExternal: false
  }
];

export const siteConfig = {
  name: 'Edunite',
  description: 'AI-Powered School Management Platform',
  logo: {
    icon: 'GraduationCap',
    text: 'Edunite'
  },
  links: {
    login: '/login',
    signup: '/signup'
  }
} as const;
