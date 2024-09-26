import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function objectToQueryString(params: Record<string, any>): string {
  const queryString = Object.keys(params)
    .map((key) => {
      const value = params[key];

      if (value === undefined || value === null) {
        return '';
      }

      if (Array.isArray(value)) {
        return value
          .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
          .join('&');
      }

      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    })
    .filter(Boolean)
    .join('&');

  return queryString ? `?${queryString}` : '';
}
