import js from '@eslint/js';
import auto from 'eslint-config-canonical/auto';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({ ignores: ['dist'] }, auto, {
  extends: [js.configs.recommended, ...tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2_020,
    globals: globals.browser,
    parserOptions: {
      projectService: true,
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'canonical/filename-match-regex': ['off'],
    'import/no-unassigned-import': [1, { allow: ['**/*.css'] }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          env: true,
        },
      },
    ],
  },
});
