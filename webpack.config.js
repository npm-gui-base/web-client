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
        loader: 'style-loader!css-loader',
      }, {
        test: /\.scss$/,
        loader: ['css', 'postcss', 'sass'],
      }, {
        test: /\.vue/,
        loader: 'vue',
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|gif|jpg)/,
        loader: 'url?limit=1000',
      }, {
        test: /\.html$/,
        exclude: /(.+\.template\.html)/,
        loader: 'html',
      },
    ],
  },
  resolve: {
    modulesDirectories: ['web_modules', 'node_modules'],
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
