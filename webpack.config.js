const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./client/index.tsx"),
  output: {
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "ts-loader" },
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
      },
    ],
  },
  // externals: {
  //   "react": "React",
  //   "react-dom": "ReactDOM",
  // },
  devtool: "source-map",
};
