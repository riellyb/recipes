import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
	render() {
		return (
			<nav className="main-nav">
				<h1 style={{color: '#fff'}}>Recipes</h1>
				<div className="pull-right"><Link to='/login'><button className="btn btn-primary">Login</button></Link></div>
				<div className="pull-right" style={{marginRight: '15px'}}><Link to='/signup'><button className="btn btn-primary">Signup</button></Link></div>
			</nav>
		);
	}
}