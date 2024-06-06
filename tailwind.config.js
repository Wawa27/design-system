import defaultTheme from 'tailwindcss/defaultTheme';

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
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'lg': ['1.25rem', {
          lineHeight: '144%',
          fontWeight: 'normal',
        }],
        'm': ['1.125rem', {
          lineHeight: '132%',
          fontWeight: 'light',
        }],
        'm-regular': ['1.125rem', {
          lineHeight: '132%',
          fontWeight: 'normal',
        }],
        's': ['1rem', {
          lineHeight: '148%',
          fontWeight: 'light',
        }],
        's-regular': ['1rem', {
          lineHeight: '148%',
          fontWeight: 'normal',
        }],
        'xs': ['0.875rem', {
          lineHeight: '140%',
          fontWeight: 'normal',
        }],
      },
      color: {
        'purple': "#9D3FE7",
        'error': "#D51A52",
        "black": "#1A141F",
        "hint-text": "#4B3A5A",
        "border": "#ABA7AF",
        "disabled": "#D4D2D5",
        "spacer": "#D9D1E0",
        "spacer-light": "#E5E0EB",
        "light-grey": "#F5F3F7",
        "white": "#FFFFFF",
        "attention": "#FF9500",
        "approval": "#00B998",
        "link": "#0F0BAB"
      },
    },
  },
  plugins: [],
}

