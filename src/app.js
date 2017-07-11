import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Main from './components/main.js';
import axios from 'axios';

require('./scss/style.scss');


class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newRecipe: false,
	    	query:'',
	    	recipes: [],
	    	filteredData: [],
	    };
	};

	componentDidMount = () => {
		this.getRecipes();
  	}

	updateMain = () => {
		this.setState(prevState => ({
			newRecipe: false,
        }));
        //call API to get all recipes
        this.getRecipes();
	};
	newRecipe = () => {
		this.setState({
			newRecipe: true,
        });
	};
	doSearch = (queryText) => {
        //get query result
        let queryResult = this.state.recipes;
        queryResult = queryResult.filter(function(recipe){
	      return recipe.name.toLowerCase().search(
	        queryText.toLowerCase()) !== -1;
	    });
 
        this.setState({
            query:queryText,
            filteredData: queryResult
        });
	};
	getRecipes = () => {
		axios.get('http://localhost:3000/recipes')
      		.then(res => {
      			console.log(res);
        		const recipes = res.data;
        		this.setState({ 
        			recipes: recipes,
        			filteredData: recipes,
        		});
      		});
	}
	render() {
		return (
			<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} 
					updateMain={this.updateMain} />
				<Main data={this.state.filteredData} 
					query={this.state.query}
					doSearch={this.doSearch}
					newRecipe={this.state.newRecipe}
					numberOfUpdates={this.state.numberOfUpdates}
					content={this.state.mainContent} />
			</div>
		);
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);