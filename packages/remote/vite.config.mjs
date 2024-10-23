import path from 'path';
import topLevelAwait from 'vite-plugin-top-level-await';
import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        modulePreload: false,
        cssCodeSplit: true,
        rollupOptions: {
            external: ['@/utils/index', '@/ui/index'],
            output: {
                minifyInternalExports: false,
            }
        }
    },
    plugins: [
        federation({
            name: 'xyz',
            filename: 'remoteEntry.js',
            exposes: {
                './index': './src/index.ts',
            },
            shared: [
                {
                    'vue': {
                        generate: false
                    },
                    '@/utils/index': {
                        packagePath: './src/utils.ts',
                        import: false,
                        generate: false,
                    },
                    '@/ui/index': {
                        packagePath: './src/ui.ts',
                        import: false,
                        generate: false,
                    },
                },
            ],
        }),

        // helpers
        topLevelAwait({
            promiseExportName: "__tla",
            promiseImportName: i => `__tla_${i}`
        })
    ],
});
