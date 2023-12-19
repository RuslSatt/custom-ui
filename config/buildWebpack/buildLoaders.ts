import { getStyleLoader } from './loaders/buildStyleLoader';

export const getLoaders = () => {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};
	const styleLoader = getStyleLoader();

	return [tsLoader, styleLoader];
};
