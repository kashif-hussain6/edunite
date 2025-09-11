'use client';

import React, { memo } from 'react';
import type { SocialLink as SocialLinkType } from '@/types';

interface SocialLinkProps {
  social: SocialLinkType;
  className?: string;
}

const SocialLink = memo<SocialLinkProps>(({ social, className = '' }) => {
  const IconComponent = social.icon;
  
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`h-6 w-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm ${className}`}
      aria-label={`Follow us on ${social.name} (opens in new tab)`}
    >
      <IconComponent className="h-full w-full" aria-hidden="true" />
    </a>
  );
});

SocialLink.displayName = 'SocialLink';

export default SocialLink;
