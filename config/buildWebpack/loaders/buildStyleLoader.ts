import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getStyleLoader = (isDev: boolean) => {
	return {
		test: /\.css$/i,
		use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
	};
};
