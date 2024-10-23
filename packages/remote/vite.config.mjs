import path from 'path';
import topLevelAwait from 'vite-plugin-top-level-await';
import federation from '@originjs/vite-plugin-federation';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        minify: false,
        rollupOptions: {
            input: {
                remote: './src/index.ts',
            }
        },
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
                        packagePath: './src/index.ts',
                        generate: false,
                    },
                    '@/ui/index': {
                        packagePath: './src/index.ts',
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
