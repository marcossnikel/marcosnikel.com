/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navy: "#537188",
        navy2: "#9db2bf",
        beige: "#cbb279",
        vintage: "#176B87",
        gray: "#64CCC5",
        txcolor: "#DAFFFB",
        cool : "#001C30"
      },
      fontFamily: {
        poppins: ["Poppins"],
        mada: ["Mada"],
        crimson: ["Crimson Text"],
      },
    },
  },
  plugins: [],
};
