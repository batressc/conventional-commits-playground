import { defineConfig } from 'vite';

export default defineConfig({
    base: '/conventional-commits-playground/',
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
