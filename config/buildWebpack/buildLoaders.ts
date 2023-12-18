import { getStyleLoader } from './loaders/buildStyleLoader';

export const getLoaders = (isDev: boolean) => {
	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};
	const styleLoader = getStyleLoader(isDev);

	return [tsLoader, styleLoader];
};
