const path = require('path');

module.exports = {
    entry: './js/motivational-quotes-react.js', // Entry file
    output: {
        path: path.resolve(__dirname, '../dist'), // Output to the root-level 'dist' folder
        filename: 'motivational-quotes-bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Match JavaScript files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets
                    },
                },
            },
            {
                test: /\.json$/, // Match JSON files
                type: 'json', // Use Webpack's built-in JSON loader
            },
        ],
    },
    mode: 'production', // Production mode
};