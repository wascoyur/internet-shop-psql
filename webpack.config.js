import path from 'path';

module.exports = {
  entry: './server/index.js',
  mode: 'development',
  type: 'module',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.ts$/, use: 'ts-loader'},
    ],
  },
};
