var path = require('path');
module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  devServer: {
    inline:true,
    contentBase: './',
    host:'0.0.0.0',
    port: 3000
  },  
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
