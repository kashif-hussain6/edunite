"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import type { AuthContextType, AuthUser, AuthError, LoginFormData, SignUpFormData } from '@/types/auth';

const mockAuthService = {
  signIn(email: string, password: string): { user?: AuthUser; error?: AuthError } {
    if (email === 'admin@edunite.com' && password === 'password123') {
      const user: AuthUser = {
        id: '1',
        email: 'admin@edunite.com',
        name: 'Admin User',
        role: 'admin',
        avatar: '/avatars/admin.jpg',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }; 
      return { user };
    }
    
    return {
      error: {
        message: 'Invalid email or password',
        code: 'INVALID_CREDENTIALS',
        field: 'email'
      }
    };
  },

  signUp(data: SignUpFormData): { user?: AuthUser; error?: AuthError } {
    const user: AuthUser = {
      id: Date.now().toString(),
      email: data.email,
      name: data.name,
      role: data.role,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    return { user };
  },

  signOut(): void {
    // Simple mock - no API call
  }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simple mock check - no API calls
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token');
      if (token) {
        setUser({
          id: '1',
          email: 'admin@edunite.com',
          name: 'Admin User',
          role: 'admin',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
      }
    }
    setLoading(false);
  }, []);

  const signIn = (email: string, password: string) => {
    setLoading(true);
    
    const result = mockAuthService.signIn(email, password);
    
    if (result.user) {
      setUser(result.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', 'mock_token');
      }
      router.push('/dashboard');
    }
    
    setLoading(false);
    return result;
  };

  const signUp = (data: SignUpFormData) => {
    setLoading(true);
    
    const result = mockAuthService.signUp(data);
    
    if (result.user) {
      setUser(result.user);
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', 'mock_token');
      }
      router.push('/dashboard');
    }
    
    setLoading(false);
    return result;
  };

  const signOut = () => {
    setLoading(true);
    
    mockAuthService.signOut();
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token');
    }
    router.push('/');
    
    setLoading(false);
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signOut,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
