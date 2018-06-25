const path = require('path');
const plugins = require('./plugins');
const resolvers = require('./resolvers');
const paths = require('../paths');

module.exports = {
    target: 'web',

    entry: ['@babel/polyfill'],

    output: {
        path: path.join(paths.clientBuild, paths.publicPath),
        filename: '[name].js',
        publicPath: paths.publicPath,
        chunkFilename: '[name].chunk.js',
    },

    resolve: { ...resolvers },

    plugins: plugins.shared,
    // stats: {
    //     cached: false,
    //     cachedAssets: false,
    //     chunks: false,
    //     chunkModules: false,
    //     colors: true,
    //     hash: false,
    //     modules: false,
    //     reasons: false,
    //     timings: true,
    //     version: false,
    // },
};
