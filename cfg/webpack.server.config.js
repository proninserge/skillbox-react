const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV; // for win npm i -g win-node-env
const GLOBAL_CSS_REGEXP = /\.main\.global\.less$/;

module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/shared'),
            '@utils': path.resolve(__dirname, '../src/utils'),
        },
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                            exportOnlyLocals: true,
                        },
                    }
                }, 'less-loader'],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['css-loader', 'less-loader']
            }
        ],
    },
    optimization: {
        minimize: false,
    },
    plugins: [
        new webpack.ProvidePlugin({
            'React': 'react',
        }),
    ],
};