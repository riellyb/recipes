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
			openedARecipe: false,
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
		axios.get('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
        		const recipe = res.data;
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
		let mainContent;
		if(this.state.openedARecipe) { 
            mainContent = () => {
            	return (
            		<Recipe close={this.closeARecipe} data={this.state.openRecipe} />
        		);
        	};
        } else { 
        	mainContent = () => {
            	return (
            		<Main data={this.state.filteredData} 
					openRecipe={this.openARecipe}
					query={this.state.query}
					doSearch={this.doSearch}
					newRecipe={this.state.newRecipe}
					createRecipe={this.createRecipe} />
        		);
        	};
        }	
    	return(
    		<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} 
				updateMain={this.updateMain} />
				{mainContent()}
			</div>
		);
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);