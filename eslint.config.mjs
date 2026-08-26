import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';

export default [
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'node_modules/**',
      'next-env.d.ts',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx,mjs,cjs}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },

      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    plugins: {
      '@next/next': nextPlugin,
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,

      /*
       * JSX and React component usage are compiled by Next.js.
       * These rules are intentionally disabled for this JS/Next/Three project.
       */
      'no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unknown-property': 'off',
    },
  },
];