const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  // Tell webpack the root file of our server application
  entry: 
    './client',
  

 
  // plugins:[
  //   new HtmlWebpackPlugin({
  //     template: 'index.html',
  //   })
  // ],


  // Tell webpack where to put the generated output file
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public'),
  },
};

module.exports = merge(baseConfig, config);
