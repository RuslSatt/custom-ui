import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getStyleLoader = () => {
	return {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader']
	};
};
