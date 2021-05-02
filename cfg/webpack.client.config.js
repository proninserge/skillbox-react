const path = require('path');
const {HotModuleReplacementPlugin} = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV; // for win npm i -g win-node-env
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.main\.global\.less$/;

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',

            '@': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/shared'),
        },
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3031/static/__webpack_hmr',
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: "/static/",
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }
                }, 'less-loader'],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ],
    },
    plugins: [
        new HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react',
        }),
    ],
};