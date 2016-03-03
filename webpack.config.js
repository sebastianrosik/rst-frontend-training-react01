module.exports = {
    entry: './src/main.jsx',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 8080,
        host: '0.0.0.0'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    }
    
}