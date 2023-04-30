import { type Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // extend: {
    //   typography: ({ theme }) => ({
    //     white: {
    //       css: {
    //         '--tw-prose-body': theme('colors.white'),
    //         '--tw-prose-headings': theme('colors.white'),
    //         '--tw-prose-lead': theme('colors.white'),
    //         '--tw-prose-links': theme('colors.white'),
    //         '--tw-prose-bold': theme('colors.white'),
    //         '--tw-prose-counters': theme('colors.white'),
    //         '--tw-prose-bullets': theme('colors.white'),
    //         '--tw-prose-hr': theme('colors.white'),
    //         '--tw-prose-quotes': theme('colors.white'),
    //         '--tw-prose-quote-borders': theme('colors.white'),
    //         '--tw-prose-captions': theme('colors.white'),
    //         '--tw-prose-code': theme('colors.pink[900]'),
    //         '--tw-prose-pre-code': theme('colors.pink[100]'),
    //         '--tw-prose-pre-bg': theme('colors.pink[900]'),
    //         '--tw-prose-th-borders': theme('colors.white'),
    //         '--tw-prose-td-borders': theme('colors.white'),
    //         '--tw-prose-invert-body': theme('colors.white'),
    //         '--tw-prose-invert-headings': theme('colors.white'),
    //         '--tw-prose-invert-lead': theme('colors.white'),
    //         '--tw-prose-invert-links': theme('colors.white'),
    //         '--tw-prose-invert-bold': theme('colors.white'),
    //         '--tw-prose-invert-counters': theme('colors.white'),
    //         '--tw-prose-invert-bullets': theme('colors.white'),
    //         '--tw-prose-invert-hr': theme('colors.white'),
    //         '--tw-prose-invert-quotes': theme('colors.white'),
    //         '--tw-prose-invert-quote-borders': theme('colors.white'),
    //         '--tw-prose-invert-captions': theme('colors.white'),
    //         '--tw-prose-invert-code': theme('colors.white'),
    //         '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
    //         '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
    //         '--tw-prose-invert-th-borders': theme('colors.white'),
    //         '--tw-prose-invert-td-borders': theme('colors.white')
    //       }
    //     }
    //   })
    // }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
} satisfies Config;
