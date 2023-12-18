import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { getLoaders } from './buildLoaders';

export const getWebpackConfig = (options: BuildOptions) => {
	const { paths, mode, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].js',
			path: paths.output,
			clean: true
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: {
			open: true,
			historyApiFallback: true,
			port: options.port
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: paths.html
			}),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css'
			})
		],
		module: {
			rules: getLoaders(isDev)
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
