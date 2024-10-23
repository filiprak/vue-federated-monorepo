import path from 'path';
import topLevelAwait from 'vite-plugin-top-level-await';
import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            input: {
                webapp: './index.html',
            }
        },
    },
    resolve: {
        alias: {
            '@/ui': path.resolve(__dirname, './packages/ui/src'),
            '@/utils': path.resolve(__dirname, './packages/utils/src'),
            '@/webapp': path.resolve(__dirname, './packages/webapp/src'),
        }
    },
    plugins: [
        // remote
        federation({
            name: '@/',
            filename: 'remoteEntry.js',
            exposes: {
                './utils/index': {
                    import: 'packages/utils/src/index.ts',
                },
                './ui/index': {
                    import: 'packages/ui/src/index.ts',
                },
            },
            shared: ['vue'],
        }),
        // host
        federation({
            name: 'host',
            remotes: {
                '@/': {
                    external: '/assets/remoteEntry.js',
                    from: 'webpack',
                },
            },
            shared: ['vue']
        }),

        // helpers
        topLevelAwait({
            promiseExportName: "__tla",
            promiseImportName: i => `__tla_${i}`
        })
    ],
});
