'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/src',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets'),
  },
  module: {
    'rules': [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: [
          'babel-loader?cacheDirectory'
        ],
      },
      {
        test: /\.scss$/,
        /*loader: ['style-loader', 'css-loader', 'sass-loader'],*/
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        loader: 'file-loader',
        options: {
          name: (path) => {
            if (! /node_modules|bower_components/.test(path)) {
              return '[name].[ext]?[hash]';
            }

            return path
              .replace(/\\/g, '/')
              .replace(
                /((.*(node_modules|bower_components))|fonts|font|assets)\//g, ''
              ) + '?[hash]';
          },
          publicPath: '../',
          outputPath: 'fonts/',
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'dist') + '/index.html',
      template: 'app/index.html',
    }),
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
    }),
  ],
};