const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // HTML Loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Fonts Loader
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // Correct type for static assets
        generator: {
          filename: "resource/fonts/[name][ext]", // Output fonts to "resource/fonts/"
        },
      },
      // Images Loader
      {
        test: /\.(png|svg|jpg|jpeg|webp|jpe?g|gif)$/i,
        type: "asset/resource", // Correct type for static assets
        generator: {
          filename: "resource/images/[name][ext]", // Output images to "resource/images/"
        },
      },
    ],
  },
};
