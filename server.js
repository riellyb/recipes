var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Recipe = require('./api/models/recipeModel'),
  
  bodyParser = require('body-parser');

//Connect to DB via Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/recipes'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//API routes
var api = require('./api/routes/recipeRoutes');
app.use('/recipes', api);

//main routes
var routes = require('./routes/routes');
app.use('/', routes);

//404 handling
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Recipe RESTful API server started on: ' + port);