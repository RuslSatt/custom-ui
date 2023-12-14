import path from 'path';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildPaths } from './config/types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
};

const config: webpack.Configuration = {
    mode: 'development',
    entry: paths.entry,
    output: {
        filename: '[name].[contenthash].js',
        path: paths.output,
        clean: true,
    },
    devServer: {
        open: true,
        historyApiFallback: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.src, 'node_modules'],
        alias: {},
        mainFiles: ['index'],
    },
};

export default config;
