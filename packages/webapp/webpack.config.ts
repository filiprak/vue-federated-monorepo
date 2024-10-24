import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { container } from 'webpack';

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
                loader: 'esbuild-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index-wp.html',
            inject: 'body',
        }),
        new container.ModuleFederationPlugin({
            name: 'webapp',
            
            shared: {
                'vue': {
                    requiredVersion: '^3.0.0'
                },
                '@/ui/index': {
                    requiredVersion: '^1.0.0'
                },
                '@/utils/index': {
                    requiredVersion: '^1.0.0'
                },
            },
        })
    ],
    resolve: {
        extensions: [
            '.ts',
        ],
        alias: {
            '@/ui': path.resolve(__dirname, '../ui/src'),
            '@/utils': path.resolve(__dirname, '../utils/src'),
            '@/webapp': path.resolve(__dirname, '../webapp/src'),
        },
    },
};

export default config;
