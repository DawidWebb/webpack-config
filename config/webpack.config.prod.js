const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: "./src/app.js",
  },
  output: {
    filename: "js/[name]-[contenthash:6].js",
    path: path.resolve(__dirname, "../", "build"),
  },

  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      { test: /\.(png|svg|jpg)$/, use: "file-loader" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "nowa aplikacja",
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]-[contenthash:6].css",
    }),
  ],
};
