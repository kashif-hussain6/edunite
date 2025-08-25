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
