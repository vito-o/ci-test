import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // 自动检测 installed React 版本
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "off",
    },
  },
]);