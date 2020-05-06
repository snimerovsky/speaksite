const path = require('path');
const miniCss = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),

   entry: './index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8800
    },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HTMLWebpackPlugin({
        template: './index.html'
    }),
   ]
};