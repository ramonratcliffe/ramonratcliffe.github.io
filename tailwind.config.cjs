const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx}', 
    './index.html',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '5rem'
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui']
      },
      extend: {
        colors: {
          green: '#0D6000',
          pink: '#D7A9A5',
          blue: '#000080',
          neutral: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
      },

  },
});