import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                ui: 'packages/ui/src/index.ts',
                utils: 'packages/utils/src/index.ts',
                webapp: 'packages/webapp/src/index.ts',
            }
        },
    },
    resolve: {
        alias: {
            '@/utils': path.resolve(__dirname, './packages/utils/src'),
            '@/ui': path.resolve(__dirname, './packages/ui/src'),
            '@/webapp': path.resolve(__dirname, './packages/webapp/src'),
        }
    },
});
