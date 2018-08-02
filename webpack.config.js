const webpack = require('webpack')
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
    filename: isDevServer ? '[name].js' : '[name].[chunkhash].js',
    library: ['ComponentLibraries', '@coursehero/mythos', '[name]'],
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    inline: true,
    port: 8081,
    https: true,
    hot: true
  },
  devtool: 'source-map',
  externals: argv.outputLibraryTarget === 'window' ? {
    react: 'React',
    'react-dom': 'ReactDOM'
  } : {},
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
  },
  plugins: [
    new webpack.DefinePlugin({
      CL_VERSION: JSON.stringify(require('child_process').execSync('git rev-parse HEAD').toString().trim())
    })
  ]
})
