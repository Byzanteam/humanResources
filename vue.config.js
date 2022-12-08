module.exports = {
  publicPath: './',
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
      '/v1': {
        target: 'http://bigdata.hxrc.com/rczytsgzpt/rczytsgzpt-server',
        changOrigin: false,
      },
    },
  },
}
