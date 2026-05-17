/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        indigo: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8", // Primary
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        emerald: {
          500: "#10B981", // Secondary
        },
        amber: {
          500: "#F59E0B", // Accent
        },
        cream: {
          50: "#FCFCFA", // Background
          100: "#F8F7F2",
        },
        slate: {
          900: "#0F172A",
          800: "#1E293B", // Text
        },
        brand: {
          primary: "#1D4ED8",
          secondary: "#10B981",
          accent: "#F59E0B",
          surface: "#FCFCFA",
          ink: "#1E293B",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          '"Plus Jakarta Sans"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: [
          "Inter",
          '"Plus Jakarta Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 24px -8px rgba(15, 23, 42, 0.08)",
        card: "0 10px 40px -12px rgba(29, 78, 216, 0.18)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
        cta: "0 14px 32px -10px rgba(29, 78, 216, 0.45)",
        glow: "0 0 60px -10px rgba(59, 130, 246, 0.45)",
      },
      backgroundImage: {
        "mesh-light":
          "radial-gradient(at 12% 18%, rgba(59,130,246,0.12) 0px, transparent 55%), radial-gradient(at 85% 8%, rgba(245,158,11,0.10) 0px, transparent 55%), radial-gradient(at 78% 80%, rgba(16,185,129,0.10) 0px, transparent 55%)",
        "cta-gradient":
          "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #1D4ED8 100%)",
        "text-gradient":
          "linear-gradient(135deg, #1D4ED8 0%, #3B82F6 50%, #F59E0B 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0)" },
          "50%": { transform: "translateY(-14px) translateX(4px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.6" },
          "70%": { transform: "scale(1.4)", opacity: "0" },
          "100%": { transform: "scale(1.4)", opacity: "0" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-ring":
          "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
