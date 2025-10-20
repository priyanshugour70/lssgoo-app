/**
 * LssGoo Travel App - Currency Utilities
 * Utility functions for currency formatting and conversion
 */

import APP_CONFIG from '@/app/constants/appConfig';
import COMPANY_INFO from '@/app/constants/companyInfo';

/**
 * Format currency value
 */
export const formatCurrency = (
  amount: number,
  currency: string = APP_CONFIG.currency,
  showSymbol: boolean = true
): string => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: showSymbol ? 'currency' : 'decimal',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(amount);
};

/**
 * Format currency with custom symbol
 */
export const formatCurrencyWithSymbol = (
  amount: number,
  currencySymbol: string = COMPANY_INFO.business.currencySymbol
): string => {
  return `${currencySymbol}${amount.toLocaleString('en-IN')}`;
};

/**
 * Parse currency string to number
 */
export const parseCurrency = (currencyString: string): number => {
  const cleanString = currencyString.replace(/[^0-9.-]+/g, '');
  return parseFloat(cleanString) || 0;
};

/**
 * Convert currency (placeholder - would use real exchange rates in production)
 */
export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number => {
  // This is a placeholder. In production, use a real exchange rate API
  const exchangeRates: Record<string, Record<string, number>> = {
    INR: { USD: 0.012, EUR: 0.011, INR: 1 },
    USD: { INR: 83, EUR: 0.92, USD: 1 },
    EUR: { INR: 90, USD: 1.09, EUR: 1 },
  };

  if (fromCurrency === toCurrency) return amount;

  const rate = exchangeRates[fromCurrency]?.[toCurrency] || 1;
  return amount * rate;
};

/**
 * Get currency symbol
 */
export const getCurrencySymbol = (currency: string): string => {
  const symbols: Record<string, string> = {
    INR: '₹',
    USD: '$',
    EUR: '€',
    GBP: '£',
  };

  return symbols[currency] || currency;
};

/**
 * Format price range
 */
export const formatPriceRange = (
  minPrice: number,
  maxPrice: number,
  currency: string = APP_CONFIG.currency
): string => {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${minPrice.toLocaleString()} - ${symbol}${maxPrice.toLocaleString()}`;
};

