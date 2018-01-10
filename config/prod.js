module.exports = {
  publicPath: '/',
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
  }
}
