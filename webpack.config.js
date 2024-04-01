const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        // allows for refreshing a webpage without getting a cannot GET page error
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'dist'),
            publicPath: '/'
        }
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }

}