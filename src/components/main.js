import React from 'react';
import Recipes from './recipes.js';
import Browse from './browse.js';
import NewRecipe from './new-recipe.js';
import Search from './search.js';
import RecipeTable from './recipe-table.js';
import { Switch, Route } from 'react-router-dom';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Switch>

		      <Route exact path='/' render={() => (<Browse query={this.props.query}
						doSearch={this.props.doSearch}
						openARecipe={this.props.openARecipe}
						data={this.props.data}  />)} />
		      <Route path='/recipe' render={(props) => (<Recipes 
		      			updateRecipe={this.props.updateRecipe}
						getRecipe={this.props.getRecipe} {...props} />)} />
		      <Route path='/new-recipe' render={() => (<NewRecipe 
		      			createRecipe={this.props.createRecipe} />)}/>
		    </Switch>
	    );
	}
}