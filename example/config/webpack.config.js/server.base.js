const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const common = require('./common.base');
const paths = require('../paths');
const { server: serverLoaders } = require('./loaders');
const plugins = require('./plugins');

module.exports = merge.smart(common, {
    name: 'server',
    target: 'node',
    entry: [path.resolve(__dirname, '../../src/server/index.js')],
    externals: [
        nodeExternals({
            // we still want imported css from external files to be bundled otherwise 3rd party packages
            // which require us to include their own css would not work properly
            whitelist: /\.css$/,
        }),
    ],
    output: {
        path: paths.serverBuild,
        filename: 'server.js',
        // libraryTarget: 'commonjs2',
    },
    module: {
        rules: serverLoaders,
    },
    plugins: plugins.server,
    stats: {
        colors: true,
    },
});
