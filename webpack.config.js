const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    npmGuiWebClient: ['babel-polyfill', './index.js'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: './[name].js',
  },
  watchOptions: {
    poll: 1000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      }, {
        test: /\.css/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }, {
        test: /\.vue/,
        loader: 'vue',
      }, {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg|gif|jpg)/,
        loader: 'url?limit=1000',
      }, {
        test: /\.html$/,
        exclude: /(.+\.template\.html)/,
        loader: 'html',
      },
    ],
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules', 'npm-gui_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'NPM-GUI',
      template: 'index.template.html',
      chunks: ['npmGuiWebClient'],
      hash: true,
      mobile: true,
    }),
  ],
};
