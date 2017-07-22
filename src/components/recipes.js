import React from 'react';
import NewRecipe from './new-recipe.js';
import Recipe from './recipe.js';
import UpdateRecipe from './update-recipe.js';
import { Switch, Route } from 'react-router-dom';


export default class Recipes extends React.Component {
	render() {
		return (
			<Switch>

		      <Route exact path='/recipe/:recipeId' render={() => (<Recipe />)} />
		      <Route path='/recipe/:recipeId/update' render={() => (<UpdateRecipe
		            			data={this.props.data}
		            			updateRecipe={this.props.updateRecipe} />)} />
		      <Route path='/new-recipe' render={() => (<NewRecipe
		      		createRecipe={this.props.createRecipe} />)}/>
		    </Switch>
		);

	}
}