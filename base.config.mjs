import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";
import importPlugin from 'eslint-plugin-import';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    plugins: {
      import: importPlugin
    },
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',    // Built-in Node.js modules (e.g., fs, path)
            'external',   // Packages from node_modules
            'internal',   // Aliased paths
            'parent',     // Imports from parent directories
            'sibling',    // Imports from sibling files
            'index',      // Index files (e.g., ./index)
          ],
          'newlines-between': 'always', // Adds a newline between groups
          alphabetize: {
            order: 'asc', // Sort within each group alphabetically
            caseInsensitive: true
          }
        }
      ]
    }
  },
  {
    ignores: ["dist/**"],
  },
];
