const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  devServer: {
    contentBase: "./public"
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      helpers: path.resolve(__dirname, "src/helpers")
    }
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
