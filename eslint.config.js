import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
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
      prettier: pluginPrettier,
    },
    settings: {
      react: {
        version: "detect", // 自动检测 installed React 版本
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...configPrettier.rules, // 关闭与 Prettier 冲突的 ESLint 规则
      "react/prop-types": "off",
      "react/jsx-uses-react": "error",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "error", // 开启 prettier 报错提示
    },
  },
]);