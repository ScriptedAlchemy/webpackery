const baseConfig = require('./client.base');
const merge = require('webpack-merge');

const config = merge.smart(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'bundle.[hash:8].js'
    }
});

module.exports = config;
