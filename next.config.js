const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
// const withTypescript = require("@zeit/next-typescript");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");
const withImages = require("next-images");
const NEXT_CONFIG = {
  distDir: "_build",
  publicRuntimeConfig: {
    // Will be available on both server and client
    ENV: process.env.ENV
  },
  webpack(config, options) {
    // Do not run type checking twice:
    if (process.env.ENV !== "production") {
      config.devtool = "source-map";
      config.optimization.minimize = false;
    }
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]"
        }
      }
    });
    return config;
  }
};
module.exports = withPlugins(
  [
    withImages,
    withCSS,
    [
      withSass,
      {
        sassOptions: {
          includePaths: ["./src/style"]
        }
      }
    ],
    withBundleAnalyzer,
    [withTM, { transpileModules: [] }]
  ],
  NEXT_CONFIG
);
