const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../", "build"),
  },
};
