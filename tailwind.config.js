// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'fadeInUp': 'fadeInUp 0.35s cubic-bezier(.33,1,.68,1)',
        'fadeToPortal': "fadeToPortal 0.7s cubic-bezier(.33,1,.68,1)",
        'bounce-in': 'bounce-in 0.5s cubic-bezier(.33,1,.68,1)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeToPortal: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        'bounce-in': {
          "0%": { opacity: 0, transform: 'scale(0.7) translateY(30px)' },
          "60%": { opacity: 1, transform: 'scale(1.07) translateY(-8px)' },
          "100%": { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
