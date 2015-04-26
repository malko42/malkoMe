var webpack = require('webpack')
, nib = require('nib')
, CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");;

module.exports = {
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/assets/',
      'webpack/hot/only-dev-server',
      './src/js/app.jsx'
      ],
  },
  devtool: 'source-map',
  output: {
    path: './dist/js',
    publicPath: '/js/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.DefinePlugin({
          'process.env.NODE_ENV': '"development"'
      }),
    // new CommonsChunkPlugin("common.js")
  ],
  module: {
    loaders: [
      { test: /\.jade$/, loader: "jade" },
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'jsx-loader?harmony'] },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
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
