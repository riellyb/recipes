'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecipeSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the recipe'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  ingredients: {
    type: String
  },
  directions: {
    type: String
  }
});

module.exports = mongoose.model('Recipe', RecipeSchema);