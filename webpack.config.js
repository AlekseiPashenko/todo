var BundleTracker = require("webpack-bundle-tracker");
module.exports = {
  context: __dirname,
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: "./webpack-stats.json"
    })
  ]
};