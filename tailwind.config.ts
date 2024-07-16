import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center:true,
        padding: "15px"

      },

      colors: {
        accent: "#ff8f9c",
        blackish: "#1b1b1b",
        gray: "#4D4D4D",
        green: '#4CAF4F',
        bg: '#F5F7FA',
      },

      margin: {
        '15': '60px', // Add custom value for 60px
      },
      screens: {
        'md': '767px', // Custom 'md' breakpoint
        'lg': '1025px', // Custom 'lg' breakpoint
        
      },

      fontSize: {
        '25px': '25px',
        '30px': '30px',
        '22px': '22px',
      },
      spacing: {
        '6p': '6%',  // Custom percentage spacing
        '82p': '82%',
        '70px': '-70px',
      },
      
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
