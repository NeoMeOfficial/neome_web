/**
 * NeoMe Tailwind tokens — paste-in extension for tailwind.config.ts
 *
 * Usage in tailwind.config.ts:
 *
 *   import { neomeTheme } from './design-system/tailwind-tokens'
 *   export default {
 *     theme: { extend: neomeTheme },
 *     ...
 *   }
 *
 * These values are a MIRROR of design-system/tokens.css. If you change one,
 * change both. Prefer editing tokens.css first and porting over.
 */

export const neomeTheme = {
  colors: {
    // Primary — the voice of the brand
    cream: {
      DEFAULT: '#F8F5F0',
      50: '#FBF9F5',
      100: '#F8F5F0',
      200: '#F1ECE3',
      300: '#EAE3D6',
    },
    'deep-brown': {
      DEFAULT: '#3D2921',
      500: '#8B6959',
      700: '#5F3E31',
      900: '#3D2921',
    },
    sage: {
      DEFAULT: '#8B9E88',
      100: '#D8DFD7',
      300: '#B2BFB0',
      500: '#8B9E88',
      700: '#6B7C68',
    },

    // Secondary — accents with named jobs
    terracotta: {
      DEFAULT: '#C1856A',
      100: '#EAD5C7',
      300: '#D5AC95',
      500: '#C1856A',
      700: '#9C6148',
    },
    'dusty-teal': '#89B0BC',      // preferred
    'dusty-blue': '#89B0BC',      // legacy alias — do not use in new code
    sandy: '#D4C4B0',
  },

  fontFamily: {
    serif: ['"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
    sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
  },

  fontSize: {
    // Body scale
    'body-sm': ['13px', { lineHeight: '1.72', fontWeight: '300' }],
    'body-md': ['15px', { lineHeight: '1.72', fontWeight: '300' }],
    'body-lg': ['17px', { lineHeight: '1.72', fontWeight: '300' }],
    // Label / eyebrow
    eyebrow: ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.24em' }],
  },

  letterSpacing: {
    eyebrow: '0.24em',
    'display-tight': '-0.015em',
    'display-snug': '-0.01em',
  },

  borderRadius: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    phone: '54px',
  },

  spacing: {
    section: '128px',      // min desktop section padding
    'section-lg': '160px', // max desktop section padding
    'section-mobile': '80px',
  },

  boxShadow: {
    xs: '0 1px 2px rgba(61, 41, 33, 0.04)',
    sm: '0 2px 8px rgba(61, 41, 33, 0.05)',
    md: '0 2px 24px rgba(61, 41, 33, 0.05)',
    lg: '0 20px 60px rgba(61, 41, 33, 0.12)',
    phone: '0 50px 100px rgba(0, 0, 0, 0.28), 0 15px 35px rgba(0, 0, 0, 0.15)',
  },

  transitionTimingFunction: {
    signature: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },

  transitionDuration: {
    // NEVER go faster than 300ms — brand floor
    quick: '300ms',
    medium: '600ms',
    fade: '900ms',
  },

  maxWidth: {
    container: '1400px',
  },
} as const;
