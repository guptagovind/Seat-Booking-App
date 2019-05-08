const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const imagePath = path.join(__dirname, 'src', 'svg', '**/*.svg');
const SvgSpriteMap = new SVGSpritemapPlugin({
  src: imagePath,
  styles: '~svgstyle.scss',
  svgo: false
});


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index_bundle.js'
  },
  module:{
    rules:[
      /*{
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          emitError: true,
          quiet: false,
          failOnWarning: true,
          failOnError: true,
        }
      },*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    SvgSpriteMap,
    new webpack.LoaderOptionsPlugin({ options: {} })
  ]
};
