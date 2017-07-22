import React from 'react';
import Header from './header.js';
import Sidebar from './sidebar.js';
import Main from './main.js';
import axios from 'axios';
import Recipe from './recipe.js';
import UpdateRecipe from './update-recipe.js';
import ReactDOM from 'react-dom';
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
  	}
	//filter browse table based on user input
	doSearch = (queryText) => {
        //get query result
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
      		});	
	};
	//send new recipe data to api
	updateRecipe = (params) => {
		axios.put('http://localhost:3000/recipes/' + params.id, params)
      		.then(res => {
      			return;

      		});	
	};
	//open a recipe
	openARecipe = (recipeId) => {
		axios.get('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
        		return res;
      		});
	};
	//tell api to delete recipe
	deleteARecipe = (recipeId) => {
		axios.delete('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
      			return;
      		});
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
						getRecipes={this.getRecipes}
						createRecipe={this.createRecipe}
						updateRecipe={this.updateRecipe}
						openARecipe={this.openARecipe}
						deleteARecipe={this.deleteARecipe} />
				</div>
			</div>
		);
	};
}