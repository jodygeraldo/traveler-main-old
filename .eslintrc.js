module.exports = {
  extends: ['eslint-config-kentcdodds'],
  plugins: ['simple-import-sort'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 'off',

    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    // 'jsx-a11y/media-has-caption': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'jsx-a11y/alt-text': 'off', // it's not smart enough...
    // '@babel/new-cap': 'off',
    // 'react/jsx-filename-extension': 'off',
    '@typescript-eslint/no-namespace': 'off',

    // '@typescript-eslint/no-unsafe-call': 'off',
    // '@typescript-eslint/no-unsafe-assignment': 'off',
    // '@typescript-eslint/no-unsafe-member-access': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    // disable because vscode ts does the same
    '@typescript-eslint/no-unused-vars': 'off',

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'off',

    // for CatchBoundaries
    '@typescript-eslint/no-throw-literal': 'off',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}
