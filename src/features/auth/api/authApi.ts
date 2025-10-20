/**
 * LssGoo Travel App - Auth API
 * Uses local data from /data folder for development
 * Replace these implementations when backend is ready
 */

import {
    MOCK_USERS,
    createUser,
    findUserByEmail,
    findUserByPhone,
    generateMockOTP,
    verifyMockOTP,
} from '../data/mockUsers';
import {
    AuthResponse,
    AuthUser,
    LoginCredentials,
    OTPResponse,
    OTPVerification,
    SignupData,
} from '../types/authTypes';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class AuthApi {
  /**
   * Send OTP to phone number
   */
  async sendOTP(phone: string): Promise<OTPResponse> {
    await delay(1000);

    try {
      if (!phone || phone.length < 10) {
        return {
          success: false,
          error: 'Invalid phone number',
        };
      }

      const otp = generateMockOTP(phone);

      return {
        success: true,
        otp: otp, // ⚠️ ONLY FOR DEMO - Remove in production
        message: `OTP sent to ${phone}`,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to send OTP',
      };
    }
  }

  /**
   * Verify OTP
   */
  async verifyOTP(data: OTPVerification): Promise<AuthResponse> {
    await delay(800);

    try {
      const isValid = verifyMockOTP(data.phone, data.otp);

      if (!isValid) {
        return {
          success: false,
          error: 'Invalid or expired OTP',
        };
      }

      const existingUser = findUserByPhone(data.phone);

      if (existingUser) {
        const { password, ...userWithoutPassword } = existingUser;
        return {
          success: true,
          user: userWithoutPassword as AuthUser,
          token: `token_${existingUser.id}_${Date.now()}`,
          message: 'Login successful',
        };
      } else {
        return {
          success: true,
          message: 'OTP verified. Please complete signup.',
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'OTP verification failed',
      };
    }
  }

  /**
   * Complete signup after OTP verification
   */
  async signup(data: SignupData): Promise<AuthResponse> {
    await delay(1000);

    try {
      const existingUser = findUserByEmail(data.email) || findUserByPhone(data.phone);
      if (existingUser) {
        return {
          success: false,
          error: 'User already exists',
        };
      }

      const newUser = createUser({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(data.name)}&size=150`,
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
      });

      const { password, ...userWithoutPassword } = newUser;

      return {
        success: true,
        user: userWithoutPassword as AuthUser,
        token: `token_${newUser.id}_${Date.now()}`,
        message: 'Signup successful',
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Signup failed',
      };
    }
  }

  /**
   * Login with phone and password
   */
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    await delay(1000);

    try {
      const user = findUserByPhone(credentials.phone);

      if (!user) {
        return {
          success: false,
          error: 'User not found',
        };
      }

      if (credentials.password && user.password !== credentials.password) {
        return {
          success: false,
          error: 'Invalid password',
        };
      }

      const { password, ...userWithoutPassword } = user;

      return {
        success: true,
        user: userWithoutPassword as AuthUser,
        token: `token_${user.id}_${Date.now()}`,
        message: 'Login successful',
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Login failed',
      };
    }
  }

  /**
   * Logout
   */
  async logout(): Promise<{ success: boolean }> {
    await delay(500);
    return { success: true };
  }

  /**
   * Get current user
   */
  async getCurrentUser(token: string): Promise<AuthResponse> {
    await delay(500);

    try {
      const tokenParts = token.split('_');
      if (tokenParts.length < 2) {
        return {
          success: false,
          error: 'Invalid token',
        };
      }

      const userId = tokenParts[1];
      const user = MOCK_USERS.find(u => u.id === userId);

      if (!user) {
        return {
          success: false,
          error: 'Invalid token',
        };
      }

      const { password, ...userWithoutPassword } = user;

      return {
        success: true,
        user: userWithoutPassword as AuthUser,
        token,
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.message || 'Failed to get user',
      };
    }
  }
}

export const authApi = new AuthApi();
export default authApi;
