const HtmlWebpackPlugin = require('html-webpack-plugin');
const path= require('path');
module.exports={
    entry: './index.js',
    output:{
        filename :'output.js',
        path: path.join(__dirname, 'public'),
    },
    module :{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react']
                    }
                  
                }
            },{
                test :/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test :/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.(png|jpg|svg)/,
                type: 'asset/resource'
            }
        ]
    },
    devServer:{
        port : 4000,
        static:{
            directory: path.join(__dirname, 'public','output')
        },
        devMiddleware:{
            writeToDisk:true,
        }
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./index.html',

    })]
 
    
}