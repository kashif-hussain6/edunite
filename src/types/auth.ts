// Authentication related types

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
  refreshToken?: string;
}

export interface AuthError {
  message: string;
  code?: string;
  field?: keyof FormErrors;
}

export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => { user?: AuthUser; error?: AuthError };
  signOut: () => void;
  signUp: (data: SignUpFormData) => { user?: AuthUser; error?: AuthError };
}

export interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: 'teacher' | 'student' | 'parent';
  agreeToTerms: boolean;
}

export interface SignUpFormErrors extends FormErrors {
  name?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
}
