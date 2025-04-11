module.exports = {
  darkMode: "class", // Enable dark mode using the class strategy
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Add other paths where you use Tailwind
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
