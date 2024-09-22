/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '200px'
      },

      dropShadow: {
        glow: [
          "0 0px 20px rgba(255, 255, 255, 0.35)",  
          "0 0px 65px rgba(255, 255, 255, 0.2)"
        ]
      },

      fontFamily: {
        body: '"DM Sans"',
        title: '"Cormorant Garamond"'
      },

      colors: {
        light: {
          100: '#E9E8E3',
        },

        dark: {
          100: '#C2C2C2',
          200: '#202020',
          300: '#080808',
          400: '#94938D',
        },
      },
      plugins: [],
    }
  }
}
