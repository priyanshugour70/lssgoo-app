/**
 * LssGoo Travel App - Mock User Database
 * This acts as our backend database for development
 * In production, replace API calls to use real backend
 */

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  avatar?: string;
  createdAt: string;
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

// Mock user database
export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@lssgoo.com',
    phone: '+919876543210',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    createdAt: '2024-01-15T10:00:00Z',
    preferences: {
      theme: 'light',
      language: 'en',
      currency: 'INR',
      notifications: {
        push: true,
        email: true,
        sms: false,
      },
    },
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@lssgoo.com',
    phone: '+919876543211',
    password: 'password123',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    createdAt: '2024-02-20T14:30:00Z',
    preferences: {
      theme: 'light',
      language: 'en',
      currency: 'INR',
      notifications: {
        push: true,
        email: false,
        sms: false,
      },
    },
  },
  {
    id: '3',
    name: 'Priyanshu Gour',
    email: 'priyanshu@lssgoo.com',
    phone: '+919098393937',
    password: 'lssgoo2024',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    createdAt: '2024-03-10T09:15:00Z',
    preferences: {
      theme: 'light',
      language: 'en',
      currency: 'INR',
      notifications: {
        push: true,
        email: true,
        sms: true,
      },
    },
  },
];

// Mock OTP storage (in real app, this would be backend-generated and sent via SMS/Email)
export interface MockOTP {
  phone: string;
  otp: string;
  expiresAt: Date;
}

export const MOCK_OTP_STORAGE: Map<string, MockOTP> = new Map();

// Generate mock OTP (always returns "1234" for demo purposes, but shows on screen)
export const generateMockOTP = (phone: string): string => {
  const otp = '1234'; // For demo, always use 1234
  MOCK_OTP_STORAGE.set(phone, {
    phone,
    otp,
    expiresAt: new Date(Date.now() + 5 * 60 * 1000), // 5 minutes
  });
  return otp;
};

// Verify OTP
export const verifyMockOTP = (phone: string, otp: string): boolean => {
  const storedOTP = MOCK_OTP_STORAGE.get(phone);
  if (!storedOTP) return false;
  if (new Date() > storedOTP.expiresAt) {
    MOCK_OTP_STORAGE.delete(phone);
    return false;
  }
  return storedOTP.otp === otp;
};

// Helper functions for mock database operations
export const findUserByEmail = (email: string): User | undefined => {
  return MOCK_USERS.find(user => user.email.toLowerCase() === email.toLowerCase());
};

export const findUserByPhone = (phone: string): User | undefined => {
  return MOCK_USERS.find(user => user.phone === phone);
};

export const createUser = (userData: Omit<User, 'id' | 'createdAt'>): User => {
  const newUser: User = {
    ...userData,
    id: `user_${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  MOCK_USERS.push(newUser);
  return newUser;
};

export const updateUser = (userId: string, updates: Partial<User>): User | null => {
  const userIndex = MOCK_USERS.findIndex(user => user.id === userId);
  if (userIndex === -1) return null;
  
  MOCK_USERS[userIndex] = { ...MOCK_USERS[userIndex], ...updates };
  return MOCK_USERS[userIndex];
};

