const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./webpack/entry.js",
    output: {
    path: __dirname + '/assets/js/app',
    filename: 'webpack.bundle.js',
    publicPath: '/'
  },
  module: {
  rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader", // "babel-loader" is also a legal name to reference
            query: {
              presets: ["env"]
            }
          }
      ]
  }
}