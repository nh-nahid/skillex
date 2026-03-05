/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        /* Brand Colors */
        brand: {
          purple: "#7C3AED",
          pink: "#EC4899",
          blue: "#3B82F6",
          indigo: "#6366F1",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      /* 🎬 Animations */
      keyframes: {
        /* Horizontal Gradient */
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },

        /* Vertical Gradient (IMPORTANT for your theme) */
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },

        /* Floating Glow */
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-30px)" },
        },

        /* Aurora Rotation */
        aurora: {
          "0%": { transform: "translateX(-50%) rotate(0deg)" },
          "50%": { transform: "translateX(50%) rotate(180deg)" },
          "100%": { transform: "translateX(-50%) rotate(360deg)" },
        },

        /* Fade In */
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        /* Scale In */
        scaleIn: {
          "0%": { opacity: 0, transform: "scale(0.96)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },

      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 18s ease infinite",
        float: "float 8s ease-in-out infinite",
        aurora: "aurora 25s linear infinite",
        fadeIn: "fadeIn 0.6s ease forwards",
        scaleIn: "scaleIn 0.4s ease-out forwards",
      },

      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};