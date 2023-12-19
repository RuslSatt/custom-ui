export const getStyleLoader = () => {
	return {
		test: /\.css$/i,
		use: ['style-loader', 'css-loader']
	};
};
