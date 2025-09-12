
'use client';

import React, { memo, useMemo } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { footerData } from '@/data/footer';
import FooterLink from './FooterLink';
import SocialLink from './SocialLink';

const Footer = memo(() => {
  const LogoComponent = footerData.company.logo;
  
  const memoizedSections = useMemo(() => footerData.sections, []);
  const memoizedSocialLinks = useMemo(() => footerData.social, []);
  const memoizedLegalLinks = useMemo(() => footerData.legal, []);

  return (
    <footer 
      className="bg-gray-900 text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <LogoComponent 
                className="h-8 w-8 text-blue-400" 
                aria-hidden="true"
              />
              <span className="text-2xl font-bold">{footerData.company.name}</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {footerData.company.description}
            </p>
            <nav 
              className="flex space-x-4"
              aria-label="Social media links"
            >
              {memoizedSocialLinks.map((social) => (
                <SocialLink 
                  key={social.name}
                  social={social}
                />
              ))}
            </nav>
          </div>
          
          {/* Navigation Sections */}
          {memoizedSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-6">
                {section.title}
              </h3>
              <nav aria-label={`${section.title} navigation`}>
                <ul className="space-y-3 text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <address className="space-y-4 text-gray-400 not-italic">
              <div className="flex items-center">
                <Mail 
                  className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href={`mailto:${footerData.contact.email}`}
                  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label={`Send email to ${footerData.contact.email}`}
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone 
                  className="h-5 w-5 mr-3 text-blue-400 flex-shrink-0" 
                  aria-hidden="true"
                />
                <a 
                  href={`tel:${footerData.contact.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-sm"
                  aria-label={`Call us at ${footerData.contact.phone}`}
                >
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin 
                  className="h-5 w-5 mr-3 text-blue-400 mt-1 flex-shrink-0" 
                  aria-hidden="true"
                />
                <div>
                  <div>{footerData.contact.address.line1}</div>
                  <div>{footerData.contact.address.line2}</div>
                </div>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              {footerData.copyright}
            </div>
            <nav 
              className="flex flex-wrap gap-6 text-gray-400"
              aria-label="Legal links"
            >
              {memoizedLegalLinks.map((link) => (
                <FooterLink 
                  key={link.label}
                  link={link}
                />
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
