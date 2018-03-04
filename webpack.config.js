const path = require('path')

const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js'

module.exports = {
  entry: {
    manifest: './src/component-manifest.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevServer ? '[name].js' : '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
