/**
 * LssGoo Travel App - API Client
 * Centralized HTTP client for API requests
 */

import APP_CONFIG from '@/app/constants/appConfig';
import { ApiRequestConfig, ApiResponse, ApiError } from '@/types/api';

class ApiClient {
  private baseUrl: string;
  private defaultHeaders: Record<string, string>;
  private token: string | null = null;

  constructor() {
    this.baseUrl = APP_CONFIG.apiBaseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  /**
   * Set authentication token
   */
  setToken(token: string | null) {
    this.token = token;
  }

  /**
   * Get authentication headers
   */
  private getAuthHeaders(): Record<string, string> {
    if (this.token) {
      return {
        ...this.defaultHeaders,
        Authorization: `Bearer ${this.token}`,
      };
    }
    return this.defaultHeaders;
  }

  /**
   * Make HTTP request
   */
  async request<T>(config: ApiRequestConfig): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${config.url}`;
      const headers = {
        ...this.getAuthHeaders(),
        ...config.headers,
      };

      const response = await fetch(url, {
        method: config.method,
        headers,
        body: config.data ? JSON.stringify(config.data) : undefined,
      });

      const data = await response.json();

      if (!response.ok) {
        throw {
          code: 'API_ERROR',
          message: data.message || 'An error occurred',
          statusCode: response.status,
          details: data,
        } as ApiError;
      }

      return {
        success: true,
        data: data,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  /**
   * GET request
   */
  async get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    const queryString = params 
      ? '?' + new URLSearchParams(params).toString()
      : '';
    
    return this.request<T>({
      method: 'GET',
      url: url + queryString,
    });
  }

  /**
   * POST request
   */
  async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
    });
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
    });
  }

  /**
   * PATCH request
   */
  async patch<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'PATCH',
      url,
      data,
    });
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>({
      method: 'DELETE',
      url,
    });
  }
}

export const apiClient = new ApiClient();
export default apiClient;

