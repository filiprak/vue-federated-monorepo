import path from 'path';
import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            input: {
                webapp: 'packages/webapp/src/html/index.html',
            }
        },
    },
    server: {
        open: 'packages/webapp/src/html/index.html',
    },
    resolve: {
        alias: {
            '@/utils': path.resolve(__dirname, './packages/utils/src'),
            '@/webapp': path.resolve(__dirname, './packages/webapp/src'),
        }
    },
    plugins: [
        federation({
            name: '@/utils',
            filename: 'utils.js',
            exposes: {
                './index': 'packages/utils/src/index.ts',
            },
            shared: ['vue']
        }),
        federation({
            name: 'host',
            remotes: {
                '@/utils': {
                    external: '/assets/utils.js',
                    from: 'webpack',
                }
            },
            shared: ['vue']
        }),
    ],
});
