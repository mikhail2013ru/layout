const path = require('path')

module.exports = {
    mode: 'development',

    entry: {
        main: './js/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },

    devtool: 'eval-source-map'
}