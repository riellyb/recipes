'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RecipeSchema = new Schema({
  name: {
    type: String,
    Required: 'Please enter the name of the recipe'
  },
  author: String,
  ingredients: [String],
  categories: [String],
  images: [String],
  createdDate: {
    type: Date,
    default: Date.now
  },
  directions: [String],
  prepTime: String,
  cookTime: String
});

module.exports = mongoose.model('Recipe', RecipeSchema);