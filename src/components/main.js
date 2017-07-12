import React from 'react';
import NewRecipe from './new-recipe.js';
import Search from './search.js';
import RecipeTable from './recipe-table.js';

export default class Main extends React.Component {
	render() {
		if(this.props.newRecipe) { 
            return (<section className="main"><NewRecipe createRecipe={this.props.createRecipe} /></section>);
        } else { 
        	return(
        		<section className="main">
					<h2>Browse Recipes</h2>
					<Search doSearch={this.props.doSearch} query={this.props.query}/>
					<RecipeTable openRecipe={this.props.openRecipe} data={this.props.data} />
				</section>
			);
		}
	}
}