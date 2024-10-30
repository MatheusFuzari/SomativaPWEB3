import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue, { rules } from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
  },
  {    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 4],
      "comma-spacing": ["error", { before: false, after: true }],
      "vue/multi-word-component-names": ["warn"],
      "@typescript-eslint/consistent-type-imports": ["error"],
      "@typescript-eslint/no-explicit-any": ["warn"],
    },
  },
];
