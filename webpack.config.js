var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [ 
            {
              loader: 'babel-loader',
              query: {
                "presets": ["react", "es2015", "stage-0"],
                "plugins": ["transform-class-properties"]
              } 

            },
            {
              loader: 'eslint-loader'
            }
          ]
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
	  	  {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       },
		    {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           'file-loader'
         ]
       }
     ]
  },
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ],
  devServer: {
    publicPath: '/',
    contentBase: './dist'
  }

};