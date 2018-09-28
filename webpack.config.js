const webpack = require('webpack')
const path = require('path')

const CL = '@coursehero/mythos'
const isDevServer = path.basename(require.main.filename) === 'webpack-dev-server.js'

module.exports = (env, argv) => ({
  mode: isDevServer ? 'development' : 'production',
  entry: {
    MythosApp: 'mythos-app/index.tsx',
    Greeting: 'greeting.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isDevServer ? '[name].js' : '[name].[chunkhash].js',
    library: ['ComponentLibraries', CL, '[name]'],
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
        test: /\.tsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      CL: JSON.stringify(CL),
      CL_VERSION: JSON.stringify(require('child_process').execSync('git rev-parse HEAD').toString().trim())
    })
  ]
})
