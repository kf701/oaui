
module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [ {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loaders: "babel-loader",
            query:{ presets: ['react'] }
        } ]
    }
}
