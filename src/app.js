import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Main from './components/main.js';
import axios from 'axios';
import Recipe from './components/recipe.js';
import UpdateRecipe from './components/update-recipe.js';

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
	    	updatingRecipe: false,
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
		if(this.state.updatingRecipe) {
			if(confirm('You have unsaved edits do you wish to abandon them?')) {
				this.setState({
			newRecipe: true,
			openedARecipe: false,
        });
			} else {
				return;
			}
		}
		this.setState({
			newRecipe: true,
			openedARecipe: false,
			updatingRecipe: false,
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
	updateRecipe = (params) => {
		console.log(params)
		axios.put('http://localhost:3000/recipes/' + params.id, params)
      		.then(res => {
      			console.log(res);
      			this.setState({ 
        			updatingRecipe: false,
        		}, () => this.openARecipe(res.data._id));

      		});	
	};
	openARecipe = (recipeId) => {
		axios.get('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
      			console.log(res);
        		let recipe = res.data;
        		this.setState({ 
        			openRecipe: recipe,
        			openedARecipe: true,
        		});
      		});
	};
	editARecipe = () => {
		this.setState({ 
			updatingRecipe: true,
		});
	};
	closeARecipe = () => {
		this.setState({ 
			openedARecipe: false,
		});
	};
	closeEditView = () => {
		this.setState({ 
			updatingRecipe: false,
		});
	};
	render() {
		let mainContent;
		if(this.state.openedARecipe) { 
            mainContent = () => {
            	if(this.state.updatingRecipe) {
            		return (
	            		<UpdateRecipe close={this.closeEditView}
	            			data={this.state.openRecipe}
	            			updateRecipe={this.updateRecipe} />
	        		);
            	} else {
	            	return (
	            		<Recipe edit={this.editARecipe}
	            			close={this.closeARecipe}
	            			data={this.state.openRecipe} />
	        		);
	        	}
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