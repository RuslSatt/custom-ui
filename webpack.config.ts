import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildPaths } from './config/buildWebpack/types/config';
import { getWebpackConfig } from './config/buildWebpack/webpackConfiguration';

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	};

	const mode = env.mode || 'development';
	const port = env.port || 8080;
	const isDev = mode === 'development';

	const config: webpack.Configuration = getWebpackConfig({
		mode,
		paths,
		isDev,
		port
	});

	return config;
};
