import React from 'react';
export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className="sidebar">
				<h2>Menu</h2>
				<button onClick={this.props.updateMain} className="btn btn-primary">Browse {this.props.numberOfRecipes} Recipes</button>
				<button className="btn btn-primary">Search Recipes</button>
				<button onClick={this.props.newRecipe} className="btn btn-primary">New Recipe</button>
			</aside>
		);
	}
}