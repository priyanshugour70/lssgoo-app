/**
 * LssGoo Travel App - Auth Feature Types
 */

export interface LoginCredentials {
  phone: string;
  password?: string;
}

export interface SignupData {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface OTPVerification {
  phone: string;
  otp: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
  preferences: {
    theme: 'light' | 'dark';
    language: string;
    currency: string;
    notifications: {
      push: boolean;
      email: boolean;
      sms: boolean;
    };
  };
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  token?: string;
  message?: string;
  error?: string;
}

export interface OTPResponse {
  success: boolean;
  otp?: string; // Only for demo purposes - showing OTP on screen
  message?: string;
  error?: string;
}

