module.exports = {
    devtool: 'source-map',
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map"
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['./../../babelRelayPlugin']
                }
            }
        ]
    }
}