module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 200: "#ababb8", 700: "#4c4d56", 900: "#21203c" },
        gray: { 300: "#e1e1e1", 500: "#a0a0a0" },
        blue: { 700: "#005de0", "700_01": "#176bd4", "700_f6": "#176bd4f6" },
        black: { "900_3f": "#0000003f", "900_0c": "#0000000c" },
        green: {
          A400: "#0fdc90",
          A400_d3: "#12de8fd3",
          A400_02: "#0ede8f",
          A400_01: "#12de8f",
        },
        indigo: { 800: "#1a3b82", "800_02": "#1d3b82", "800_01": "#1b3b82" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        manrope: "Manrope",
        opensans: "Open Sans",
        lucidasanstypewriter: "Lucida Sans Typewriter",
      },
      backgroundImage: {
        gradient: "linear-gradient(166deg ,#1a3b82,#176bd4f6,#0fdc90)",
        gradient1: "linear-gradient(180deg ,#1b3b82,#176bd4f6)",
        gradient2: "linear-gradient(180deg ,#12de8f,#005de0,#1b3b82)",
        gradient3: "linear-gradient(180deg ,#1a3b82,#176bd4f6,#12de8f)",
        gradient4: "linear-gradient(180deg ,#1a3b82,#176bd4f6,#0fdc90)",
        gradient5: "linear-gradient(180deg ,#1b3b82,#005de0)",
        gradient6: "linear-gradient(180deg ,#1a3b82,#005de0)",
        gradient7: "linear-gradient(180deg ,#1a3b82,#176bd4)",
        gradient8: "linear-gradient(135deg ,#1d3b82,#176bd4f6,#12de8f)",
        gradient9: "linear-gradient(225deg ,#1d3b82,#005de0,#12de8f)",
        gradient10: "linear-gradient(90deg ,#1a3b82,#005de0)",
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "0px 4px  24px 0px #0000000c",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
