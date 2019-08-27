import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import * as ExtensionLoader from 'webpack-extension-reloader';
// @ts-ignore
import * as WriteFilePlugin from 'write-file-webpack-plugin';

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: !isProd ? 'development' : 'production',

  entry: {
    background: path.resolve(__dirname, '#/entry/background/index.ts'),
    content: path.resolve(__dirname, '#/entry/content/index.ts'),
    inject: path.resolve(__dirname, '#/entry/inject/index.ts'),
    panel: path.resolve(__dirname, '#/entry/panel/index.tsx'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules', './'],
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
    ],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: '#/assets',
      },
    ]),
    new HtmlWebpackPlugin({
      template: '#/assets/panel.html',
      filename: 'panel.html',
      chunks: ['panel'],
    }),
    new WriteFilePlugin(),
    // @ts-ignore
    new ExtensionLoader({
      manifest: path.resolve(__dirname, '#/assets/manifest.json'),
    }),
  ],
};
