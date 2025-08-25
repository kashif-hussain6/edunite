import type { HeroData, Stat, Benefit } from '@/types';

export const heroData: HeroData = {
  badge: {
    icon: 'Star',
    text: 'Trusted by 100+ Schools Worldwide'
  },
  title: {
    main: 'Transform Your',
    highlight: 'School Management',
    suffix: 'Experience'
  },
  description: 'AI-powered comprehensive school management software that streamlines administration, enhances communication, and empowers educational excellence.',
  benefits: [
    { text: 'AI Question Generation' },
    { text: 'Smart Timetable Creation' },
    { text: 'Automated Reports' },
    { text: 'Real-time Analytics' }
  ],
  stats: [
    { number: '10K+', label: 'Schools' },
    { number: '500K+', label: 'Students' },
    { number: '99.9%', label: 'Uptime' }
  ],
  logos: ['Harvard', 'Stanford', 'MIT', 'Oxford'],
  image: {
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600',
    alt: 'School management dashboard',
    width: 800,
    height: 600
  },
  floatingCards: [
    {
      icon: 'CheckCircle',
      title: 'AI-Powered',
      subtitle: 'Smart Automation',
      position: 'top-right',
      color: 'green'
    },
    {
      icon: 'Sparkles',
      title: 'Real-time',
      subtitle: 'Live Updates',
      position: 'bottom-left',
      color: 'blue'
    }
  ]
};
