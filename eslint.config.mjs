import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

import eslintRecommended from 'eslint/conf/eslint-recommended';
import pluginReactRecommended from 'eslint-plugin-react/configs/recommended';
import pluginReactHooksRecommended from 'eslint-plugin-react-hooks/config';
import pluginPrettierRecommended from 'eslint-plugin-prettier/config';
import prettierConfig from 'eslint-config-prettier';


export default [
  {
    extends: [
      'react-app',
      'react-app/jest',
      'airbnb-typescript',
      'plugin:@typescript-eslint/recommended',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
  ],
    languageOptions: { 
      globals: globals.browser,
      ecmaVersion: 2021,

    },
    ...eslintRecommended,
    ...pluginReactRecommended,
    ...pluginReactHooksRecommended,
    ...pluginPrettierRecommended,
    ...prettierConfig,
    parserOptions: {
      ecmaVersion: 12,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true
      }
    },
    plugins: {
      "react": pluginReactConfig.plugins.react,
      "react-hooks": pluginReactConfig.plugins["react-hooks"],
    },
    overrides: [
      {
        files: ["**/*.{js,jsx,ts,tsx}"],
        excludedFiles: "node_modules/**",
      },
    ],
    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": ["warn", 
        { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
      ],
      "prefer-const": ["error", { "ignoreReadBeforeAssign": true }],
      "no-unused-expressions": "error",
      "react/prefer-stateless-function": "error",
      "react/button-has-type": "error",
      "react/no-unused-prop-types": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-no-script-url": "error",
      "react/no-children-prop": "error",
      "react/no-danger": "error",
      "react/no-danger-with-children": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
      "react/jsx-fragments": "error",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],
      "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
      "react/jsx-max-depth": ["error", { max: 5 }],
      "react/function-component-definition": [
        "warn",
        { namedComponents: "arrow-function" },
      ],
      "react/jsx-key": [
        "error",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "react/jsx-no-useless-fragment": "warn",
      "react/jsx-curly-brace-presence": "warn",
      "react/no-typos": "warn",
      "react/display-name": "warn",
      "react/self-closing-comp": "warn",
      "react/jsx-sort-props": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/prop-types": "off",
      "react/jsx-props-no-multi-spaces": "off",
    }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
];