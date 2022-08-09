module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "airbnb"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "babel", "prettier"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
