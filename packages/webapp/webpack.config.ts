import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        webapp: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist-wp/')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            target: 'esnext',
                            tsconfig: './tsconfig.json',
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [],
    resolve: {
        alias: {
            '@/ui': path.resolve(__dirname, '../ui/src'),
            '@/utils': path.resolve(__dirname, '../utils/src'),
            '@/webapp': path.resolve(__dirname, '../webapp/src'),
        },
    },
};

export default config;
