import type { Config } from "tailwindcss";

const config: Config = {
  // ESTO ES VITAL: Le dice a Tailwind que obedezca a nuestro botón de sol/luna
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // <-- Seguro te faltaba esta línea
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // Asumiendo que usas tipografía para el blog
  ],
};
export default config;