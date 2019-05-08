const webpack = require('webpack');
const merge  = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common =  require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules:[
      {
        test: /\.s?css$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});