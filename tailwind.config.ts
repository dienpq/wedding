/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '80px',
        },
        screens: {
          DEFAULT: '100%',
        },
      },
      fontFamily: {
        jost: ['var(--font-jost)'],
        greatVibes: ['var(--font-great-vibes)'],
        sail: ['var(--font-sail)'],
      },
      colors: {
        'beige-rose': 'hsl(var(--beige-rose))',
        'dark-chocolate': 'hsl(var(--dark-chocolate))',
        'steel-gray': 'hsl(var(--steel-gray))',
        'rose-pink': 'hsl(var(--rose-pink))',
        'olive-gray': 'hsl(var(--olive-gray))',
        // -----
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ matchUtilities }: { matchUtilities: any }) {
      matchUtilities(
        {
          'bg-image': (value: string) => ({
            backgroundImage: `url(${value})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }),
        },
        {
          values: {
            // custom1: '/images/bg1.jpg',
            // custom2: '/images/bg2.jpg',
            // custom3: '/images/bg3.jpg',
          },
        },
      );
    },
  ],
};
export default config;
