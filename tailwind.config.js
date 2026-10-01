/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#050810",         // Deeper, slightly purple-tinted black for ultimate premium feel
        lightNavy: "#0a1128", 
        lightestNavy: "#15224e",
        cyan: "#00E5FF",         // Intense laser cyan
        purple: "#8a2be2",       // Accent purple for gradients
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff"
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        serif: ['Playfair Display', 'serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
