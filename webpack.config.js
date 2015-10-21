var webpack = require('webpack')
, nib = require('nib')
, path = require('path')
, CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");;

module.exports = {
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://webpack.malko.me/js',
      'webpack/hot/only-dev-server',
      './src/js/app.jsx'
      ],
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: 'http://webpack.malko.me/js',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
      }),
    new webpack.NoErrorsPlugin(),
    new CommonsChunkPlugin("common.js")
  ],
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade" },
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'jsx-loader?harmony'] },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  stylus: {
    use: [nib()]
  }
};
