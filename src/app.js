import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Main from './components/main.js';

require('./scss/style.scss');


class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	newRecipe: false,
	    	query:'',
            data: [
            	{
            		'id': 1,
            		'name': 'Cookies',
            		ingredients: [
            			'milk',
            			'sugar',
            			'egg'
            		],
            		directions: [
            			'mix',
            			'pour',
            			'bake'
            		]
            	},
            	{
            		'id': 2,
            		'name': 'Cake',
            		ingredients: [
            			'water',
            			'eggs',
            			'flour'
            		],
            		directions: [
            			'mix',
            			'pour',
            			'bake'
            		]
            	},
            	{
            		'id': 3,
            		'name': 'Bread',
            		ingredients: [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		directions: [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            ],
	    	recipes: [],
	    };
	};

	updateMain = () => {
		this.setState(prevState => ({
			newRecipe: false,
        }));
	};
	newRecipe = () => {
		this.setState({
			newRecipe: true,
        });
	};
	doSearch = (queryText) => {
		console.log(queryText);
		console.log(this.state.data);
        //get query result
        var queryResult = this.state.data;
        queryResult = queryResult.filter(function(recipe){
	      return recipe.name.toLowerCase().search(
	        queryText.toLowerCase()) !== -1;
	    });
 
        this.setState({
            query:queryText,
            recipes: queryResult
        });
        console.log(this.state.recipes);
	};
	render() {
		return (
			<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} 
					updateMain={this.updateMain} />
				<Main data={this.state.recipes} query={this.state.query} doSearch={this.doSearch} newRecipe={this.state.newRecipe} numberOfUpdates={this.state.numberOfUpdates} content={this.state.mainContent} />
			</div>
		);
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);