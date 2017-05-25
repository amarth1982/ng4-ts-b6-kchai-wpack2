const { resolve } = require('path')

const webpack = require('webpack')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineManifestPlugin = require('inline-manifest-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const { getIfUtils, removeEmpty } = require('webpack-config-utils')

module.exports = (env) => {
    const { ifProd, ifNotProd } = getIfUtils(env)

    let config = {
        context: resolve('src'),
        resolve: {
            extensions: ['.ts', '.js', '.css', '.html'],
            modules: [resolve('node_modules')]
        },
        entry: {
            'main': './main.ts',
            'vendor': './vendor.ts'
        },
        output: {
            filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
            path: resolve('dist'),
            pathinfo: ifNotProd()
        },
        devtool: ifProd('source-map', 'eval'),
        module: {
            loaders: [
                { test: /\.ts$/, loaders: ['babel-loader', 'angular2-template-loader'], exclude: /node_modules/ },
                {
                    test: /\.css$/, loader: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'style-loader'
                    })
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        bail: env.prod,
        plugins: removeEmpty([
            new ProgressBarPlugin(),
            new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
            ifProd(new InlineManifestPlugin()),
            ifProd(new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest']
            })),
            new HtmlWebpackPlugin({
                template: 'index.html',
                inject: 'head'
            }),
            new OfflinePlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: ifProd('"production"', '"development"')
                }
            })
        ])
    }

    if (env.debug) {
        console.log(config)
        debugger
    }

    return config;
}