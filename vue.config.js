const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // 画像ファイルに対する設定
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options || {}, { limit: 10240 }));

    // ビデオファイルに対する設定
    config.module
      .rule("videos")
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "media/[name].[hash:8].[ext]",
      });
  },
});
