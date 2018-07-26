const path = require('path')

const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js'

module.exports = (env, argv) => ({
  mode: isDevServer ? 'development' : 'production',
  entry: {
    MythosApp: './src/mythos-app/index.jsx',
    Greeting: './src/greeting.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevServer ? '[name].js' : '[name].[chunkhash].js'
  },
  devtool: 'source-map',
  externals: argv.outputLibraryTarget ? {} : {
    react: 'React',
    'react-dom': 'ReactDOM'
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
})
