/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./app/components/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        text: "#181818",
        accent: "#FFCF25",
        action: "#FFBF00",
        charcoal: "#212121",
        subtle: "#F6F6F6",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(33,33,33,0.06)",
        glow: "0 6px 20px rgba(255,207,37,0.12)",
      },
    },
  },
  plugins: [],
};
