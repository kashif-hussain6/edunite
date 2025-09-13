"use client";

import React from 'react';
import { GraduationCap } from 'lucide-react';

const LoginHero: React.FC = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 text-white flex-col justify-center px-12">
      <div className="max-w-md mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <GraduationCap className="h-12 w-12" />
          <span className="text-4xl font-bold">Edunite AI</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-6 leading-tight">  
          Welcome back to the future of education management
        </h2>         
        <p className="text-xl text-blue-100 mb-8">
          Sign in to continue managing your institution with our intelligent platform
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">AI-powered insights and analytics</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">Comprehensive student management</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3 text-blue-100">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-lg">Real-time performance tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
