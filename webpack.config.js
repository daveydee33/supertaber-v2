const path = require('path');

module.exports = {
  devServer: {
    // index: './src/index.ts',
    // contentBase: path.join(__dirname, "dist")
  },
  entry: './example/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
        options: {
          cacheDirectory: true,
        },
      }
    ]
  }
};