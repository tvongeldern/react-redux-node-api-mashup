import webpack from 'webpack';
import path from 'path';
import PlugIn from 'extract-text-webpack-plugin';

const SRC = path.resolve(__dirname, 'src/app/index.jsx');
const DST_DIR = path.resolve(__dirname, 'dist');

export default {
    entry: SRC,
    output: {
        path: DST_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new PlugIn('bundle.css')
    ],
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css/,
                loader: PlugIn.extract('css-loader'),
            }
        ]
    }
};
