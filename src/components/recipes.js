import React from 'react';
import NewRecipe from './new-recipe.js';
import Recipe from './recipe.js';
import UpdateRecipe from './update-recipe.js';
import { Switch, Route } from 'react-router-dom';


export default class Recipes extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Switch>
				//Display Recipe
		      	<Route exact path='/recipe/:recipeId' render={(props) => (<Recipe getRecipe={this.props.getRecipe} edit={this.props.updateRecipe} {...props} />)} />
		      	//Display update Recipe form
		      	<Route path='/recipe/:recipeId/update' render={(props) => (<UpdateRecipe
	        			getRecipe={this.props.getRecipe}
	        			updateRecipe={this.props.updateRecipe}
	        			deleteRecipe={this.props.deleteRecipe} {...props} />)} />
		    </Switch>
		);

	}
}