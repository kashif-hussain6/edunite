import { LucideIcon } from 'lucide-react';

// Feature types
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// Hero section types
export interface HeroData {
  badge: {
    icon: string;
    text: string;
  };
  title: {
    main: string;
    highlight: string;
    suffix: string;
  };
  description: string;
  benefits: Benefit[];
  stats: Stat[];
  logos: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  floatingCards: FloatingCard[];
}

export interface Benefit {
  text: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface FloatingCard {
  icon: string;
  title: string;
  subtitle: string;
  position: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  color: 'green' | 'blue' | 'purple' | 'orange';
}

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

// Animation types
export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface ScrollAnimationReturn {
  elementRef: React.RefObject<HTMLDivElement | null>;
  isVisible: boolean;
}

export interface StaggeredAnimationReturn {
  elementRef: React.RefObject<HTMLDivElement | null>;
  visibleItems: number[];
}

// UI Component types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// Site configuration types
export interface SiteConfig {
  name: string;
  description: string;
  logo: {
    icon: string;
    text: string;
  };
  links: {
    login: string;
    signup: string;
  };
}

// Metadata types
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}
