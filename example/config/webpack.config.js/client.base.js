const path = require('path');
const paths = require('../paths');
const {client: clientLoaders} = require('./loaders');
const plugins = require('./plugins');
const common = require('./common.base')
const merge = require('webpack-merge')

module.exports = merge.smart(common, {
    name: 'client',
    target: 'web',
    entry:  [path.resolve(__dirname, '../../src/client/index.js')],
    output: {
        path: path.join(paths.clientBuild, paths.publicPath),
        filename: 'bundle.js',
        publicPath: paths.publicPath,
    },
    module: {
        rules: clientLoaders,
    },
    plugins: plugins.client,
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    optimization: {
        namedModules: true,
        noEmitOnErrors: true,
        // concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    stats: {
        cached: false,
        cachedAssets: false,
        chunks: false,
        chunkModules: false,
        colors: true,
        hash: false,
        modules: false,
        reasons: false,
        timings: true,
        version: false,
    },
})
