import React from 'react';
import NewRecipe from './new-recipe.js';
import Search from './search.js';
import RecipeTable from './recipe-table.js';

export default class Main extends React.Component {
	render() {
		if(this.props.newRecipe) { 
            return (<div><NewRecipe cancel={this.props.closeCreateARecipe} createRecipe={this.props.createRecipe} /></div>);
        } else { 
        	return(
        		<div>
					<h2>Browse Recipes</h2>
					<Search doSearch={this.props.doSearch} query={this.props.query}/>
					<RecipeTable openRecipe={this.props.openRecipe} data={this.props.data} />
				</div>
			);
		}
	}
}