const { gray, blue, green, red, yellow, cyan, grayDark, blueDark, yellowDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...gray,
        ...blue,
        ...green,
        ...red,
        ...yellow,
        ...cyan,
        ...grayDark,
        ...blueDark,
        ...yellowDark,
        borderStrong: gray.gray8,
        borderSoft: gray.gray7,
        // Light mode semantic colors
        'bg-primary-light': '#fafafa',
        'bg-secondary-light': '#fcfcfc',
        'bg-main-content-light': 'rgba(250, 250, 250, 0.95)',
        'bg-sidebar-light': 'rgba(252, 252, 252, 0.7)',
        'text-primary-light': '#111111',
        'text-secondary-light': '#666666',
        'border-color-light': '#e5e5e5',
        'border-strong-light': '#d0d0d0',
        // Dark mode semantic colors
        'bg-primary-dark': '#0a0a0a',
        'bg-secondary-dark': '#111111',
        'bg-main-content-dark': 'rgba(10, 10, 10, 0.95)',
        'bg-sidebar-dark': 'rgba(17, 17, 17, 0.6)',
        'text-primary-dark': '#f5f5f5',
        'text-secondary-dark': '#a3a3a3',
        'border-color-dark': '#2a2a2a',
        'border-strong-dark': '#404040',
        // Transparent gray colors for light mode
        'gray1-light': 'rgba(250, 250, 250, 0.95)',
        'gray2-light': 'rgba(252, 252, 252, 0.9)',
        'gray3-light': 'rgba(248, 248, 248, 0.85)',
        'gray4-light': 'rgba(244, 244, 244, 0.8)',
        'gray5-light': 'rgba(240, 240, 240, 0.75)',
        'gray6-light': 'rgba(235, 235, 235, 0.7)',
        'gray7-light': 'rgba(230, 230, 230, 0.65)',
        'gray8-light': 'rgba(225, 225, 225, 0.6)',
        'gray12-light': 'rgba(17, 17, 17, 0.95)',

        'gray1-light-full': 'rgba(250, 250, 250, 1)',
        'gray2-light-full': 'rgba(252, 252, 252, 1)',
        'gray3-light-full': 'rgba(248, 248, 248, 1)',
        'gray4-light-full': 'rgba(244, 244, 244, 1)',
        'gray5-light-full': 'rgba(240, 240, 240, 1)',
        'gray6-light-full': 'rgba(235, 235, 235, 1)',
        'gray7-light-full': 'rgba(230, 230, 230, 1)',
        'gray8-light-full': 'rgba(225, 225, 225, 1)',
        'gray12-light-full': 'rgba(17, 17, 17, 0.95)',
        // Transparent gray colors for dark mode
        'gray1-dark': 'rgba(2, 2, 2, 0.95)',
        'gray2-dark': 'rgba(6, 6, 6, 0.9)',
        'gray3-dark': 'rgba(10, 10, 10, 0.85)',
        'gray4-dark': 'rgba(16, 16, 16, 0.8)',
        'gray5-dark': 'rgba(21, 21, 21, 0.75)',
        'gray6-dark': 'rgba(26, 26, 26, 0.7)',
        'gray7-dark': 'rgba(37, 37, 37, 0.65)',
        'gray8-dark': 'rgba(53, 53, 53, 0.6)',
        'gray12-dark': 'rgba(238, 238, 238, 0.95)',

        'gray1-dark-full': 'rgba(2, 2, 2, 1)',
        'gray2-dark-full': 'rgba(6, 6, 6, 1)',
        'gray3-dark-full': 'rgba(10, 10, 10, 1)',
        'gray4-dark-full': 'rgba(16, 16, 16, 1)',
        'gray5-dark-full': 'rgba(21, 21, 21, 1)',
        'gray6-dark-full': 'rgba(26, 26, 26, 1)',
        'gray7-dark-full': 'rgba(37, 37, 37, 1)',
        'gray8-dark-full': 'rgba(53, 53, 53, 1)',
        'gray12-dark-full': 'rgba(238, 238, 238, 1)',

        // Dark mode text colors
        'text-gray1-dark': '#111111',
        'text-gray6-dark': '#404040',
        'text-gray9-dark': '#8b8b8b',
        'text-gray10-dark': '#9ca3af',
        'text-gray11-dark': '#b4b4b4',
        'text-gray12-dark': '#eeeeee',
        // Dark mode border colors
        'border-gray7-dark': '#2a2a2a',
        'border-gray8-dark': '#404040',
        'border-gray12-dark': '#eeeeee',
        // Error colors
        'text-red11-dark': '#ff6b6b',
        'bg-red5-dark': '#2d1b1b',
        'border-red8-dark': '#8b2635',
      },
      fontFamily: {
        serif: ["Libre Baskerville", "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
        mono: ["Consolas", "Monaco", "monospace"],
        handwriting: ["Kalam", "cursive"],
      },
      fontSize: {
        sm: "0.875rem",
        base: "1rem", 
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "1.875rem",
      },
      spacing: {
        "0.5": "0.125rem",
        "1.5": "0.375rem",
        "2.5": "0.625rem",
        "3.5": "0.875rem",
      },
      lineHeight: {
        body: "1.7",
        title: "1.1",
      },
      boxShadow: {
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        sm: "0 8px 16px hsla(0, 0%, 0%, 0.03)",
      },
      borderRadius: {
        base: "6px",
        lg: "12px",
      },
      screens: {
        coffee: "1370px",
        post: "50rem",
        md: "768px",
        lg: "62em",
        xl: "80em",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "slide-up": "slide-up 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography")({
      theme: {
        extend: {
          typography: () => ({
            DEFAULT: {
              css: {
                'strong': {
                  color: 'inherit',
                  fontWeight: '600',
                },
                'b': {
                  color: 'inherit', 
                  fontWeight: '600',
                },
                'h1': {
                  color: 'inherit',
                },
                'h2': {
                  color: 'inherit',
                },
                'h3': {
                  color: 'inherit',
                },
                'h4': {
                  color: 'inherit',
                },
                'h5': {
                  color: 'inherit',
                },
                'h6': {
                  color: 'inherit',
                },
              },
            },
            gray: {
              css: {
                'strong': {
                  color: 'inherit',
                  fontWeight: '600',
                },
                'b': {
                  color: 'inherit',
                  fontWeight: '600',
                },
                'h1': {
                  color: 'inherit',
                },
                'h2': {
                  color: 'inherit',
                },
                'h3': {
                  color: 'inherit',
                },
                'h4': {
                  color: 'inherit',
                },
                'h5': {
                  color: 'inherit',
                },
                'h6': {
                  color: 'inherit',
                },
              },
            },
            xl: {
              css: {
                'strong': {
                  color: 'inherit',
                  fontWeight: '600',
                },
                'b': {
                  color: 'inherit',
                  fontWeight: '600',
                },
                'h1': {
                  color: 'inherit',
                },
                'h2': {
                  color: 'inherit',
                },
                'h3': {
                  color: 'inherit',
                },
                'h4': {
                  color: 'inherit',
                },
                'h5': {
                  color: 'inherit',
                },
                'h6': {
                  color: 'inherit',
                },
              },
            },
            invert: {
              css: {
                'strong': {
                  color: 'white',
                  fontWeight: '600',
                },
                'b': {
                  color: 'white',
                  fontWeight: '600',
                },
                'h1': {
                  color: 'white',
                },
                'h2': {
                  color: 'white',
                },
                'h3': {
                  color: 'white',
                },
                'h4': {
                  color: 'white',
                },
                'h5': {
                  color: 'white',
                },
                'h6': {
                  color: 'white',
                },
              },
            },
          }),
        },
      },
    }),
  ],
};