import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
      },
      fontSize: {
        'body-sm': ['13px', { lineHeight: '1.72', fontWeight: '300' }],
        'body-md': ['15px', { lineHeight: '1.72', fontWeight: '300' }],
        'body-lg': ['17px', { lineHeight: '1.72', fontWeight: '300' }],
        eyebrow: ['12px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.24em' }],
      },
      letterSpacing: {
        eyebrow: '0.24em',
        'display-tight': '-0.015em',
        'display-snug': '-0.01em',
      },
      spacing: {
        section: '128px',
        'section-lg': '160px',
        'section-mobile': '80px',
      },
      maxWidth: {
        container: '1400px',
      },
      transitionTimingFunction: {
        signature: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        quick: '300ms',
        medium: '600ms',
        fade: '900ms',
      },
      boxShadow: {
        'neome-xs': '0 1px 2px rgba(61, 41, 33, 0.04)',
        'neome-sm': '0 2px 8px rgba(61, 41, 33, 0.05)',
        'neome-md': '0 2px 24px rgba(61, 41, 33, 0.05)',
        'neome-lg': '0 20px 60px rgba(61, 41, 33, 0.12)',
        phone: '0 50px 100px rgba(0, 0, 0, 0.28), 0 15px 35px rgba(0, 0, 0, 0.15)',
      },
      colors: {
        /* NeoMe palette — named tokens (preferred) */
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
        terracotta: {
          DEFAULT: '#C1856A',
          100: '#EAD5C7',
          300: '#D5AC95',
          500: '#C1856A',
          700: '#9C6148',
        },
        'dusty-teal': '#89B0BC',
        'dusty-blue': '#89B0BC',
        sandy: '#D4C4B0',

        /* shadcn HSL tokens (legacy, remapped to NeoMe palette) */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        section: {
          white: "hsl(var(--section-white))",
          beige: "hsl(var(--section-beige))",
        },
        level: {
          1: "hsl(var(--level-1))",
          "1-foreground": "hsl(var(--level-1-foreground))",
          2: "hsl(var(--level-2))",
          "2-foreground": "hsl(var(--level-2-foreground))",
          3: "hsl(var(--level-3))",
          "3-foreground": "hsl(var(--level-3-foreground))",
          4: "hsl(var(--level-4))",
          "4-foreground": "hsl(var(--level-4-foreground))",
        },
        cta: {
          teal: "hsl(var(--cta-teal))",
          "teal-foreground": "hsl(var(--cta-teal-foreground))",
          white: "hsl(var(--cta-white))",
          "white-foreground": "hsl(var(--cta-white-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        phone: '54px',
        pill: '9999px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(20px)" },
        },
        "fade-blur-in": {
          "0%": { opacity: "0", filter: "blur(8px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "swipe-out-left": {
          "0%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateX(-120%) rotate(-15deg)", opacity: "0" },
        },
        "swipe-out-right": {
          "0%": { transform: "translateX(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateX(120%) rotate(15deg)", opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "fade-blur-in": "fade-blur-in 0.6s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "swipe-out-left": "swipe-out-left 0.3s ease-in",
        "swipe-out-right": "swipe-out-right 0.3s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;