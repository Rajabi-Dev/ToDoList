const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs/scripts'),
        filename: 'bundle.js'
    },

    // devServer: {
    //     contentBase: path.resolve(__dirname, 'docs'),
    //     publicPath:'/scripts/',
    // }
};