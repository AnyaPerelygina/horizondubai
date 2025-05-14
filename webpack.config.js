const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
  return {
    entry: './src/main.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '',
      clean: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      alias: {
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.module\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            'sass-loader',
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }
        
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env':{
          'BASE_URL': JSON.stringify(argv.mode === 'production' ? '/horizondubai' : '/'),
        }
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    devServer: {
      static: './dist',
      hot: true,
      port: 3000,
      open: true,
    },
    mode: 'development',
  };
};
