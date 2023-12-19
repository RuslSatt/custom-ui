import webpack from 'webpack';
import { getStyleLoader } from '../buildWebpack/loaders/buildStyleLoader';
import { BuildPaths } from '../buildWebpack/types/config';
import path from 'path';

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		entry: '',
		output: '',
		html: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	};
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push('.ts', '.tsx');
	return config;
};
