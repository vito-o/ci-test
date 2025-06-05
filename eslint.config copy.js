import js from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js, react: pluginReact },
    extends: ["js/recommended"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/react-in-jsx-scop": "off",
    },
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      ".vscode",
      ".idea",
      ".husky",
      "*.json",
      "*.config.js",
    ],
  },
]);
