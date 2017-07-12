import React from 'react';

export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className="sidebar">
				<h2>Menu</h2>
				<button onClick={this.props.updateMain} className="btn btn-primary">Browse Recipes</button>
				<button onClick={this.props.newRecipe} className="btn btn-primary">New Recipe</button>
			</aside>
		);
	}
}