'use strict';
module.exports = function(app) {
  var Recipe = require('../controllers/recipeController');


  // todoList Routes
  app.route('/recipes')
    .get(Recipe.list_all_recipes)
    .post(Recipe.create_a_recipe);


  app.route('/recipes/:recipeId')
    .get(Recipe.read_a_recipe)
    .put(Recipe.update_a_recipe)
    .delete(Recipe.delete_a_recipe);
};
