const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "index-[contenthash:6].js",
    path: path.resolve(__dirname, "../", "build"),
  },
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, "../", "public"),
    port: 5001,
  },
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.(png|svg|jpg)$/, use: "file-loader" },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "nowa aplikacja",
      template: "src/template.html",
    }),
    // new HtmlWebpackPlugin({
    //   title: "podstrona",
    //   filename: "about.html",
    // }),
  ],
};
