import type { OxfmtConfig } from 'oxfmt';

export const config = {
  printWidth: 120,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx', '*.vue'],
      options: {
        trailingComma: 'all',
        singleQuote: true,
      },
    },
    {
      files: ['*.css', '*.scss', '*.sass', '*.less', '*.styl'],
      options: {
        tabWidth: 4,
        singleQuote: true,
      },
    },
    {
      files: ['*.graphql'],
      options: {
        tabWidth: 4,
      },
    },
  ],
  sortPackageJson: false,
} as OxfmtConfig;
