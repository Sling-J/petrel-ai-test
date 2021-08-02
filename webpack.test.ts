import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import dotenv from 'dotenv'
import * as webpack from 'webpack'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import prodConfig from './webpack.prod'
import * as path from 'path' // to get the current path

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
})

const currentPath = path.join(__dirname)

// path to test env
const finalPath = currentPath + '/.env.test'

// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed

const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
  return prev
}, {})

const config: webpack.Configuration = {
  entry: prodConfig.entry,
  mode: 'development',
  watch: true,
  devServer: {
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    stats: 'minimal',
    lazy: false,
    hot: true,
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] },
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: prodConfig.resolve,
  plugins: [
    new ReactRefreshPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    htmlPlugin,
    new webpack.IgnorePlugin(/\/__tests__\//),
    new webpack.IgnorePlugin(/\/__mocks__\//),
    new webpack.DefinePlugin(envKeys),
  ],
}

export default config
