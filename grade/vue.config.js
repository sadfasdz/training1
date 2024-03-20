const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/grade/dist/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
                  @import "@/assets/scss/abstracts/_functions.scss";
                  @import "@/assets/scss/abstracts/_variables.scss";
                  @import "@/assets/scss/abstracts/_mixins.scss";
                `,
      },
    },
  },
});
