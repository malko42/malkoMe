var webpack = require('webpack')
, nib = require('nib')
, CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");;

module.exports = {
  resolve: {
  extensions: ['', '.js', '.jsx']
  },
  entry: {
    index: './src/js/index.jsx',
  },
  devtool: 'source-map',
  output: {
    path: './dist/js',
    filename: '[name].js'
  },
  plugins: [
    new CommonsChunkPlugin("common.js")
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony' },
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
