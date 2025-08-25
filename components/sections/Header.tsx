"use client";

import React, { useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import Button from "@/components/ui/Button";
import { navigationData, siteConfig } from "@/data/navigation";
import type { NavigationItem } from "@/types";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string): void => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleLogin = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    router.push(siteConfig.links.login);
  };

  const handleSignup = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    router.push(siteConfig.links.signup);
  };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderNavigationItem = (item: NavigationItem) => {
    if (item.isExternal === false) {
      return (
        <Link 
          key={item.id}
          href={item.href} 
          className="text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }

    return (
      <button 
        key={item.id}
        onClick={() => handleNavClick(item.id)} 
        className="text-gray-700 hover:text-blue-600 transition-colors"
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">{siteConfig.name}</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navigationData.map(renderNavigationItem)}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleLogin}>
              Login
            </Button>
            <Button 
              onClick={handleSignup} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </div>

          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationData.map((item) => (
                <div key={item.id} className="text-left">
                  {renderNavigationItem(item)}
                </div>
              ))}

              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start" onClick={handleLogin}>
                  Login
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white" 
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


