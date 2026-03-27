module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // include all your component files
  ],
  theme: {
    extend: {
      keyframes: {
        "wave-slow": { "0%, 100%": { transform: "translateX(0) translateY(0)" }, "50%": { transform: "translateX(-50%) translateY(8px)" } },
        "wave-medium": { "0%, 100%": { transform: "translateX(0) translateY(0)" }, "50%": { transform: "translateX(-50%) translateY(-5px)" } },
        "wave-fast": { "0%, 100%": { transform: "translateX(0) translateY(0)" }, "50%": { transform: "translateX(-50%) translateY(3px)" } },
        "fade-in": { from: { opacity: "0", transform: "translateY(5px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        "wave-slow": "wave-slow 20s ease-in-out infinite",
        "wave-medium": "wave-medium 15s ease-in-out infinite",
        "wave-fast": "wave-fast 12s ease-in-out infinite",
        "fade-in": "fade-in 0.4s ease forwards",
      },
    },
  },
  plugins: [],
};