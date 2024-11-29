/* eslint-disable import/no-named-as-default-member */

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default tseslint.config(
  {
    ignores: ["**/dist/**"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  react.configs.flat["jsx-runtime"],
  ...compat.extends("plugin:react-hooks/recommended"),
  {
    name: "main",
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "unused-imports": unusedImports,
    },
    settings: {
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
    rules: {
      curly: "error",
      eqeqeq: ["error", "always", { null: "never" }],
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-constructor": "error",
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-literal-enum-member": "error",
      "react-hooks/exhaustive-deps": "error",
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    ...tseslint.configs.disableTypeChecked,
  },
);
