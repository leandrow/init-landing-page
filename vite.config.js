import { resolve } from 'path';

export default {
  root: 'dev',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dev/index.html'),
        page: resolve(__dirname, 'dev/page/index.html'),
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/woff|woff2|svg|ttf/.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
    outDir: '../build',
  },
};
