/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#1e3a8a',
        'brand-dark': '#1D3557',
        'brand-medium': '#1e40af',
        'brand-light': '#93c5fd',
        'brand-bg': '#F8F9FA',
        'brand-dot': '#023047',
        'brand-footer': '#2c2c2c',
        // Light theme (class names kept as dark-* for compatibility)
        'dark-bg': '#ffffff',
        'dark-card': '#ffffff',
        'dark-card-hover': '#f8fafc',
        'dark-text': '#0f172a',
        'dark-text-secondary': '#334155',
        'dark-text-muted': '#64748b',
        'dark-border': '#e2e8f0',
        'dark-accent': '#1e3a8a',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUpArrows: {
          '0%': { opacity: '0', transform: 'translateY(calc(20px - 50%))' },
          '100%': { opacity: '1', transform: 'translateY(-50%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s forwards',
        fadeInUpArrows: 'fadeInUpArrows 0.5s forwards',
      },
    },
  },
  plugins: [],
};
