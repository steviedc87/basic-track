module.exports = {
    entry: './app/bootstrap.ts',
    output: {
        filename: 'app.js',
        path: __dirname + '/dir'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jpg$/, loader: "file-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.html$/, loader: "html-loader" }
        ]
    }
}