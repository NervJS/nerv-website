const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  publicPath: '//storage.jd.com/nerv-static/',
  // environment variables
  env: {
    NODE_ENV: '"production"'
  },
  // define global constants for application see https://webpack.js.org/plugins/define-plugin/
  defineConstants: {
  },
  module: {
    imageMin: {
      enable: true
    }
    // postcss: {
    //   sprites: {
    //     enable: true
    //   }
    // }
  },
  webpack: {
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/favicon.ico', to: 'favicon.ico' }
      ])
    ]
  }
}
