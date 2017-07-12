import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Main from './components/main.js';
import axios from 'axios';
import Recipe from './components/recipe.js';

require('./scss/style.scss');


class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newRecipe: false,
	    	query:'',
	    	recipes: [],
	    	filteredData: [],
	    	openRecipe: [],
	    	openedARecipe: false,
	    };
	};

	componentDidMount = () => {
		this.getRecipes();
  	}
  	//update recipe list
	updateMain = () => {
		this.setState({
			newRecipe: false,
        });
        //call API to get all recipes
        this.getRecipes();
	};
	//create a new recipe
	newRecipe = () => {
		this.setState({
			newRecipe: true,
        });
	};
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
	getRecipes = () => {
		axios.get('http://localhost:3000/recipes')
      		.then(res => {
        		const recipes = res.data;
        		this.setState({ 
        			recipes: recipes,
        			filteredData: recipes,
        			openedARecipe: false,
        		});
      		});
	};
	createRecipe = (params) => {
		axios.post('http://localhost:3000/recipes', params)
      		.then(res => {
      			this.setState({ 
        			openedARecipe: false,
        		});
      		});	
	};
	openARecipe = (recipeId) => {
		event.preventDefault();
		axios.get('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
        		const recipe = res.data;
        		console.log(recipe);
        		this.setState({ 
        			openRecipe: recipe,
        			openedARecipe: true,
        		});
      		});
	};
	closeARecipe = () => {
		this.setState({ 
			openedARecipe: false,
		});
	};
	render() {
		if(this.state.openedARecipe) { 
            return (
            	<div>
					<Header />
					<Sidebar newRecipe={this.newRecipe} 
						updateMain={this.updateMain} />
	            	<Recipe close={this.closeARecipe} data={this.state.openRecipe} />
	            </div>
            );
        } else { 
        	return(
        		<div>
					<Header />
					<Sidebar newRecipe={this.newRecipe} 
					updateMain={this.updateMain} />
					<Main data={this.state.filteredData} 
					openRecipe={this.openARecipe}
					query={this.state.query}
					doSearch={this.doSearch}
					newRecipe={this.state.newRecipe}
					createRecipe={this.createRecipe} />
				</div>
			);
		}
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);