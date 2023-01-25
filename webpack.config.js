const webpack = require('webpack')
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const plugins = [
  new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
]

const rules = [
  {
    test: /\.js$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: resolve('src'),
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: resolve('src')
  }
]

module.exports = {
  plugins,
  entry: {
    'markov-chain': './src/markov-chain.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].min.js.map',
    library: 'MarkovChain',
    libraryTarget: 'umd'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src')
    }
  }
}
