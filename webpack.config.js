import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@data": path.resolve("./src/data"),
      "@hooks": path.resolve("./src/hooks"),
      "@styles": path.resolve("./src/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/assets", to: "assets" },
        { from: "public/fonts", to: "fonts" },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },
  mode: "development",
};
