import React from 'react';
import Recipes from './recipes.js';
import Browse from './browse.js';
import NewRecipe from './new-recipe.js';
import Search from './search.js';
import RecipeTable from './recipe-table.js';
import Login from './login.js';
import Signup from './signup.js';
import { Switch, Route } from 'react-router-dom';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<Switch>
				//Search and browse recipes
		      	<Route exact path='/' render={() => (<Browse query={this.props.query}
		      		getRecipes={this.props.getRecipes}
					doSearch={this.props.doSearch}
					data={this.props.data}  />)} />
				//View Recipe and Update recipe
		      	<Route path='/recipe' render={(props) => (<Recipes
		      		updateRecipe={this.props.updateRecipe}
					getRecipe={this.props.getRecipe}
					deleteRecipe={this.props.deleteRecipe} {...props} />)} />
				//Create a new Recipe
		      	<Route path='/new-recipe' render={(props) => (<NewRecipe 
		      		createRecipe={this.props.createRecipe} />)}/>
		      	//User signup
		      	<Route path='/signup' render={(props) => (<Signup userSignup={this.props.userSignup} {...props} />)}/>
		      	//User login
		      	<Route path='/login' render={(props) => (<Login userLogin={this.props.userLogin} {...props} />)}/>
		    </Switch>
	    );
	}
}