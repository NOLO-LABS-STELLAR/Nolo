/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./stellar-wallet-connect/src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nolo: {
          50: "#fff3ee",
          100: "#ffe2d6",
          200: "#ffc4ae",
          300: "#fb9e7f",
          400: "#f2754d",
          500: "#e4572e",
          600: "#c4441f",
          700: "#a03518",
          800: "#7c2915",
          900: "#5c2012",
          950: "#331107",
        },
        vault: {
          bg: "var(--nolo-bg)",
          surface: "var(--nolo-surface)",
          text: "var(--nolo-text)",
          muted: "var(--nolo-muted)",
          border: "var(--nolo-border)",
          accent: "var(--nolo-accent)",
          "accent-strong": "var(--nolo-accent-strong)",
          "accent-glow": "var(--nolo-accent-glow)",
        },
      },
      fontFamily: {
        sans: ["var(--nolo-font-sans)", "Outfit", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["var(--nolo-font-display)", "Baloo 2", "Trebuchet MS", "Verdana", "sans-serif"],
      },
      boxShadow: {
        glass: "var(--nolo-shadow-glass)",
        glow: "var(--nolo-shadow-glow)",
      },
      backgroundImage: {
        "glass-gradient": "var(--nolo-glass-gradient)",
      },
      transitionDuration: {
        DEFAULT: "300ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "accordion-down": "accordion-down 200ms cubic-bezier(0.4, 0, 0.2, 1)",
        "accordion-up": "accordion-up 200ms cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
