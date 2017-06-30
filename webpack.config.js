var path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
   module: {
   	  loaders: [
   	  	{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
      	},
      	{ 
            test: /\.scss$/, 
            loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
        }
      ],
      postLoaders: [
     	{
	       test: /\.js$/,
	       exclude: /node_modules/, // do not lint third-party code
	       loader: 'jshint-loader'
      	}
   	  ],
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       },
	  	{
+         test: /\.(png|svg|jpg|gif)$/,
+         use: [
+           'file-loader'
+         ]
+       },
		{
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }
+     ]
+   },
	plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]

};