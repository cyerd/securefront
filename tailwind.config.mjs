/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
<<<<<<< HEAD
      'xs': '200px',
=======
      'xs': '640px',
>>>>>>> 790a7dbaf5e43a7055e44e58bdf83b4b2252dc16
      // => @media (min-width: 640px) { ... }

      'md': '720px',
      // => @media (min-width: 640px) { ... }


      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/images/landing.PNG')",
        'footer-texture': "url('/assets/images/investigation.PNG')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
