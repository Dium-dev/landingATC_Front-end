/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}'
  ],
    safelist: [
    'xs:min-w-[calc(100%/3)]',
    'xs:min-w-[calc(100%/5)]',
    'ms:min-w-[calc(100%/3)]',
    'ms:min-w-[calc(100%/4)]',
    'ms:min-w-[calc(100%/5)]',
    'md:min-w-[calc(100%/4)]',
    'md:min-w-[calc(100%/5)]',
    'lg:min-w-[calc(100%/5)]',
    {
        pattern: /min-w-./,
        variants: ['xl', 'lg', 'md', 'ms', 'xs']
    }
  ],
  theme: {
    colors: {
      'background-lm': '#f1f1f1',
      'background-dm': '#13131d',
      'primary-lm': '#fe0000',
      'primary-dm': '#444444',
      'secondary-lm': '#F20505',
      'secondary-dm': '#555555',
      'secondary-background': '#ffff',
      'text-lm': '#333333',
      'text-dm': '#f1f1f1',
      'input-bg': '#FFF2F7',
      white: '#fff',
      black: '#000',
      green: '#008000',
      gray: '#DCDCDC'
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
      xxl: '1899px',
      xxxl: '1920px'
    },
    extend: {
      backgroundImage: {
        banner:
          'url("/images/backgroundBlog.webp")',
      },

      maxWidth: {
        'f-hd': '1920px',
      },
      minWidth: {
        100: '100px',
      },
      gap: {
        50: '50px',
      },
      plugins: [],
    },
  },
};