module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/personality-test/'    : '/'
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
      enableBridge: false
    }
  }
};
