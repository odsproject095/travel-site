const path = require('path');

module.exports = {
  entry: {
    app: './app/assets/scripts/App.js'
  },
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: 'App.js'
  },
  module: {
		loaders: [
			{
        test: /\.js?$/,
        exclude: /node_modules/,
				loader: 'babel-loader',
        query: {
          presets: ['env']
        }
			}
		]
	}
}
