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


//routes
var routes = require('./api/routes/recipeRoutes');
routes(app);

//404 handling
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Recipe RESTful API server started on: ' + port);