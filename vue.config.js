module.exports = {
  publicPath: '/hxrc',
  outputDir: 'fujian',
  pluginOptions: {
    i18n: {
      locale: 'yes',
      fallbackLocale: 'yes',
      localeDir: 'yes',
      enableInSFC: true,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        includePaths: [
          './src/styles/',
        ],
        data: '@import \'injects\';',
      },
    },
  },
  devServer: {
    proxy: {
      '/custom/*': {
        target: 'http://service.testbuild.youedata.cc',
        changeOrigin: true,
      },
    },
  },
}
