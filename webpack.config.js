const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    modules: [
      'node_modules',
    ]
  },
};
