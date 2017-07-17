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
  	//open recipe list
	openBrowse = () => {
        if(this.state.updatingRecipe) {
			if(confirm('You have unsaved edits do you wish to abandon them?')) {
				this.setState({
					newRecipe: false,
					openedARecipe: false,
					updatingRecipe: false,
		        },  this.getRecipes);
		       
			}
		} else {
			this.setState({
					newRecipe: false,
					openedARecipe: false,
					updatingRecipe: false,
		        },  this.getRecipes);
		}
	};
	//create a new recipe
	newRecipe = () => {
		//if edit view is open make sure we want to navigate
		if(this.state.updatingRecipe) {
			if(confirm('You have unsaved edits do you wish to abandon them?')) {
				this.setState({
					newRecipe: true,
					openedARecipe: false,
					updatingRecipe: false,
       		 	});
			} else {
				return;
			}
		} else {
			this.setState({
				newRecipe: true,
				openedARecipe: false,
				updatingRecipe: false,
	        });
		}
	};
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
        			openedARecipe: false,
        		});
      		});
	};
	//send new recipe data to api
	createRecipe = (params) => {
		axios.post('http://localhost:3000/recipes', params)
      		.then(res => {
      			this.setState({ 
        			openedARecipe: false,
        		});
      		});	
	};
	//send new recipe data to api
	updateRecipe = (params) => {
		axios.put('http://localhost:3000/recipes/' + params.id, params)
      		.then(res => {
      			this.setState({ 
        			updatingRecipe: false,
        		}, () => this.openARecipe(res.data._id));

      		});	
	};
	//open a recipe
	openARecipe = (recipeId) => {
		axios.get('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
        		let recipe = res.data;
        		this.setState({ 
        			openRecipe: recipe,
        			openedARecipe: true,
        		}, () => console.log(this.state.openRecipe));
      		});
	};
	//tell api to delete recipe
	deleteARecipe = (recipeId) => {
		axios.delete('http://localhost:3000/recipes/' + recipeId)
      		.then(res => {
      			this.setState({ 
					updatingRecipe: false,
				}, this.openBrowse);
      		});
	};
	//open the edit recipe view
	editARecipe = () => {
		this.setState({ 
			updatingRecipe: true,
		});
	};
	//close new recipe view
	closeCreateARecipe = () => {
		this.setState({ 
			newRecipe: false,
		});
	};
	//close recipe view
	closeARecipe = () => {
		this.setState({ 
			openedARecipe: false,
		});
	};
	//close edit recipe view
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
	            			updateRecipe={this.updateRecipe}	       
	            			deleteARecipe={this.deleteARecipe} />
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
					createRecipe={this.createRecipe}
					closeCreateARecipe={this.closeCreateARecipe} />
        		);
        	};
        }	
    	return(
    		<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} 
				openBrowse={this.openBrowse} />
				<div className='main'>
					{mainContent()}
				</div>
			</div>
		);
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);