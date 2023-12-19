import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getLoaders } from './buildLoaders';

import webpack from 'webpack';

export const getWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { paths, mode } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true,
			libraryTarget: 'umd'
		},
		plugins: [],
		module: {
			rules: getLoaders()
		},
		externals: {
			react: 'react'
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			preferAbsolute: true,
			modules: [paths.src, 'node_modules'],
			alias: {},
			mainFiles: ['index']
		}
	};
};
