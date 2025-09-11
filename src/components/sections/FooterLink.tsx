'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import type { FooterLink as FooterLinkType } from '@/types';

interface FooterLinkProps {
  link: FooterLinkType;
  className?: string;
}

const FooterLink = memo<FooterLinkProps>(({ link, className = '' }) => {
  const baseClasses = 'hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm';
  
  if (link.isExternal) {
    return (
      <a
        href={link.href}
        className={`${baseClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${link.label} (opens in new tab)`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className={`${baseClasses} ${className}`}
      aria-label={link.label}
    >
      {link.label}
    </Link>
  );
});

FooterLink.displayName = 'FooterLink';

export default FooterLink;
