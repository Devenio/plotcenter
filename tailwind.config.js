module.exports = {
  mode: "jit",
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./**/*.vue"],
  theme: {
    extend: {},
    colors: {
      green: "#00d97e",
      "sec-green": "#0B4046",
      dark: "#08082c",
      "sec-dark": "#000024",
      "th-dark": "#292a3350",
      white: "#ffffff",
      transparent: "transparent",
      red: "#ff4d54"
    }
  },
  variants: {},
  plugins: []
};
