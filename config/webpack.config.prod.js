const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[contenthash:6].[ext]",
              outputPath: "images",
            },
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                quality: 70,
                progressive: true,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node-modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "new app",
      template: "src/templates/template.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:6].css",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public/images",
          to: "images",
        },
      ],
    }),
  ],
};
