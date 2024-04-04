const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = (env, argv) => {
  console.log("*****************");
  console.log(argv);
  console.log("*****************");

  // The host name matters a lot - CURL OPTIONS requests will fail to `http://localhost:5000`
  // and they will succeed when asking for `http://127.0.0.1:5000`
  const BACKEND_SERVER =
    argv.mode === "production"
      ? "https://app.estilocalico.com"
      : "http://127.0.0.1:5000";
  const FRONTEND =
    argv.mode === "production"
      ? "https://admin.estilocalico.com"
      : "http://localhost:8080";
  return {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    devServer: {
      // allows for refreshing a webpage without getting a cannot GET page error
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
        publicPath: "/",
      },
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(BACKEND_SERVER),
        FRONTEND_URL: JSON.stringify(FRONTEND),
      }),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };
};
