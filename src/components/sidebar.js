import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
	render() {
		return (
			<aside className="sidebar">
				<h2>Menu</h2>
				<Link to='/'><button className="btn btn-primary">Browse Recipes</button></Link>
				<Link to='/new-recipe'><button className="btn btn-primary">New Recipe</button></Link>
			</aside>
		);
	}
}