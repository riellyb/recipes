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
		      <Route exact path='/recipe/:recipeId' render={(props) => (<Recipe getRecipe={this.props.getRecipe} edit={this.props.updateRecipe} {...props} />)} />
		      <Route path='/recipe/:recipeId/update' render={(props) => (<UpdateRecipe
		            			data={this.props.data}
		            			updateRecipe={this.props.updateRecipe} {...props} />)} />
		    </Switch>
		);

	}
}