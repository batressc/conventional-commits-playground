import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        minify: 'esbuild',
        cssMinify: true,
    },
    server: {
        open: true,
    },
});
