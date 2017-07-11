var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Recipe = require('./api/models/recipeModel'),
  cors = require('cors'),
  bodyParser = require('body-parser');

//Connect to DB via Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/recipes'); 

//cors for dev
app.use(cors());

//parser for API
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
var api = require('./api/routes/recipeRoutes');
api(app);

//main routes
var routes = require('./routes/routes');
routes(app);

//404 handling
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Recipe App server started on: ' + port);