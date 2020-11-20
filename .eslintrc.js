module.exports = {
  extends: ["react-app"],
  rules: {
    "react/prop-types": 0, // Far less valuable in TypeScript
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/camelcase": 0,
  },
};
