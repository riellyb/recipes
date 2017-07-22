import React from 'react';
import Search from './search.js';
import RecipeTable from './recipe-table.js';
import { Switch, Route } from 'react-router-dom';

export default class Browse extends React.Component {
	render() {
		return(
    		<div>
				<h2>Browse Recipes</h2>
				<Search doSearch={this.props.doSearch} query={this.props.query}/>
				<RecipeTable openRecipe={this.props.openRecipe} data={this.props.data} />
			</div>
		);
	}
}