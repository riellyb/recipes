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
            		'category': 'Baked Goods',
            		'ingredients': [
            			'milk',
            			'sugar',
            			'egg'
            		],
            		'directions': [
            			'mix',
            			'pour',
            			'bake'
            		]
            	},
            	{
            		'id': 2,
            		'name': 'Cake',
            		'category': 'Baked Goods',
            		'ingredients': [
            			'water',
            			'eggs',
            			'flour'
            		],
            		'directions': [
            			'mix',
            			'pour',
            			'bake'
            		]
            	},
            	{
            		'id': 3,
            		'name': 'Bread',
            		'category': 'Baked Goods',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 4,
            		'name': 'Chicken',
            		'category': 'Meat',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 5,
            		'name': 'Steak',
            		'category': 'Meat',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 6,
            		'name': 'Test',
            		'category': 'Test',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 7,
            		'name': 'Cereal',
            		'category': 'Breakfast',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 8,
            		'name': 'Pork',
            		'category': 'Meat',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 9,
            		'name': 'Oatmeal',
            		'category': 'Breakfast',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            	{
            		'id': 10,
            		'name': 'Pasta',
            		'category': 'Italian',
            		'ingredients': [
            			'bananas',
            			'flour',
            			'egg',
            			'milk',
            			'sugar'
            		],
            		'directions': [
            			'eat',
            			'bake',
            			'mix'
            		]
            	},
            ],
	    	recipes: [],
	    };
	};

	componentDidMount = () => {
		this.setState({
			recipes: this.state.data,
        });
  	}

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
        //get query result
        let queryResult = this.state.data;
        queryResult = queryResult.filter(function(recipe){
	      return recipe.name.toLowerCase().search(
	        queryText.toLowerCase()) !== -1;
	    });
 
        this.setState({
            query:queryText,
            recipes: queryResult
        });
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