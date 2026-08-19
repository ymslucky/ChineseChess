import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 棋盘木质配色（棋盘 UI 任务会进一步扩展）
        board: {
          wood: '#d8a35a',
          dark: '#8a5a2b',
          line: '#5b3a1e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
