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
            },
            external: ['xyz/index'],
        },
    },
    resolve: {
        alias: {
            '@/ui': path.resolve(__dirname, '../ui/src'),
            '@/utils': path.resolve(__dirname, '../utils/src'),
            '@/webapp': path.resolve(__dirname, '../webapp/src'),
        }
    },
    plugins: [
        // host
        federation({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                xyz: {
                    external: 'http://localhost:8080/assets/remoteEntry.js',
                    from: 'webpack',
                },
            },
            shared: [
                'vue',
                {
                    '@/utils/index': {
                        packagePath: '../utils/src/index.ts',
                    },
                    '@/ui/index': {
                        packagePath: '../ui/src/index.ts',
                    },
                },
            ]
        }),

        // helpers
        topLevelAwait({
            promiseExportName: "__tla",
            promiseImportName: i => `__tla_${i}`
        })
    ],
});
