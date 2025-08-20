"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { FC, MouseEvent } from "react";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (sectionId: string) => {
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

  const handleLogin = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    router.push("/login");
  };

  const handleSignup = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    router.push("/signup");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Edunite</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick("features")} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => handleNavClick("modules")} className="text-gray-700 hover:text-blue-600 transition-colors">Modules</button>
            <button onClick={() => handleNavClick("testimonials")} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
            <button onClick={() => handleNavClick("pricing")} className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</button>
            <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors">Blogs</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" onClick={handleLogin} type="button">Login</Button>
            <Button onClick={handleSignup} className="bg-blue-600 hover:bg-blue-700 text-white" type="button">Sign Up</Button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick("features")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Features</button>
              <button onClick={() => handleNavClick("modules")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Modules</button>
              <button onClick={() => handleNavClick("testimonials")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Testimonials</button>
              <button onClick={() => handleNavClick("pricing")} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Pricing</button>
              <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Blogs</Link>

              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" className="justify-start" onClick={handleLogin} type="button">Login</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleSignup} type="button">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;


