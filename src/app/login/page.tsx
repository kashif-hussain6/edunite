"use client";

import LoginHero from '@/components/auth/LoginHero';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex">
      <LoginHero />
      <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;