import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className="sidebar">
				<h2>Menu</h2>
				<button className="btn btn-primary"><Link to='/'>Browse Recipes</Link></button>
				<button className="btn btn-primary"><Link to='/new-recipe'>New Recipe</Link></button>
			</aside>
		);
	}
}