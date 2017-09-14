import React from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Main from './main.js';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

require('../scss/style.scss');


export default class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	query:'',
	    	recipes: [],
	    	filteredData: [],
	    };
	};

	componentDidMount = () => {
		this.getRecipes();
  	};
	//filter browse table based on user input
	doSearch = (queryText) => {
        //get all recipes
        let queryResult = this.state.recipes;
        queryResult = queryResult.filter(function(recipe){
        	if(recipe.name) {
        		return recipe.name.toLowerCase().search(
	        		queryText.toLowerCase()) !== -1;
        	}
	    });
 
        this.setState({
            query:queryText,
            filteredData: queryResult
        });
	};
	//get all recipes from api
	getRecipes = () => {
		axios.get('http://localhost:3000/recipes')
      		.then(res => {
        		const recipes = res.data;
        		this.setState({ 
        			recipes: recipes,
        			filteredData: recipes,
        		});
      		});
	};
	//send new recipe data to api
	createRecipe = (params) => {
		axios.post('http://localhost:3000/recipes', params)
      		.then(res => {
      			return;
      			getRecipes();
      		});	
	};
	//Update recipe data with api, returns a promise
	updateRecipe = (params) => {
		return axios.put('http://localhost:3000/recipes/' + params.id, params);	
	};
	//get a recipe from the api, returns a promise
	getRecipe = (recipeId) => {
		return axios.get('http://localhost:3000/recipes/' + recipeId);
	};
	//tell api to delete recipe, returns a promise
	deleteRecipe = (recipeId) => {
		return axios.delete('http://localhost:3000/recipes/' + recipeId);
      		
	};
	render() {
    	return(
    		<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} 
				openBrowse={this.openBrowse} />
				<div className="main">
					<Main data={this.state.filteredData}
						query={this.state.query}
						doSearch={this.doSearch}
						getRecipes={this.getRecipes}
						createRecipe={this.createRecipe}
						updateRecipe={this.updateRecipe}
						getRecipe={this.getRecipe}
						deleteRecipe={this.deleteRecipe} />
				</div>
			</div>
		);
	};
}