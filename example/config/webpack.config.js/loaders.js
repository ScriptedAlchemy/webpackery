const ExtractCSSChunks = require('extract-css-chunks-webpack-plugin');
const path = require('path');

const babelLoader = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
};

const baseStyleLoader = (initialLoaders) => ({
    test: /\.(scss|css)$/,
    exclude: /node_modules/,
    use: [
        ...initialLoaders,
        {
            loader: 'postcss-loader',
            options: {
                config: {
                    path: path.join(__dirname, 'postcss.config.js'),
                },
            },
        },
        {
            loader: 'sass-loader',
            options: {
                importLoaders: 2
            }
        },
        {
            loader: 'sass-resources-loader',
            options: {
                resources: path.join(__dirname, '../../src/shared/variables.scss')
            }
        }
    ],
});

const cssLoaderClient = baseStyleLoader([
    ExtractCSSChunks.loader,
    {
        loader: 'css-loader',
        options: {
            minimize: true,
            sourceMap: true,
            modules: true,
            importLoaders: 2,
            localIdentName: '[name]__[local]--[hash:base64:5]'
        }
    },
]);

const cssLoaderServer = baseStyleLoader([
    {
        loader: 'css-loader/locals',
        options: {
            camelCase: true,
            importLoaders: 1,
            modules: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
        },
    },
]);

const urlLoaderClient = {
    test: /\.(png|jpe?g|gif|svg)$/,
    loader: require.resolve('url-loader'),
    options: {
        limit: 2048,
        name: 'assets/[name].[hash:8].[ext]',
    },
};

const urlLoaderServer = {
    ...urlLoaderClient,
    options: {
        ...urlLoaderClient.options,
        emitFile: false,
    },
};

const fileLoaderClient = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[hash:8].[ext]',
            },
        },
    ],
};

const fileLoaderServer = {
    exclude: [/\.(js|css|mjs|html|json|ejs)$/],
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[hash:8].[ext]',
                emitFile: false,
            },
        },
    ],
};

// Write css files from node_modules to its own vendor.css file
const externalCssLoaderClient = {
    test: /\.css$/,
    include: /node_modules/,
    use: [ExtractCSSChunks.loader, 'css-loader'],
};

// Server build needs a loader to handle external .css files
const externalCssLoaderServer = {
    test: /\.css$/,
    include: /node_modules/,
    loader: 'css-loader/locals',
};

const client = [
    {
        oneOf: [
            babelLoader,
            cssLoaderClient,
            urlLoaderClient,
            fileLoaderClient,
            externalCssLoaderClient,
        ],
    },
];
const server = [
    {
        oneOf: [
            babelLoader,
            cssLoaderServer,
            urlLoaderServer,
            fileLoaderServer,
            externalCssLoaderServer,
        ],
    },
];

module.exports = {
    client,
    server,
};
