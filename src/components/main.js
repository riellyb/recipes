import React from 'react';
import NewRecipe from './new-recipe.js';

export default class Main extends React.Component {
	render() {
		if(this.props.newRecipe) { 
            return (<section className="main"><NewRecipe /></section>);
        } else { 
        	return(
        		<section className="main">
					<h2>Browse Recipes</h2>
					<h3>{this.props.content}{this.props.numberOfUpdates} times</h3>
				</section>
			);
		}
	}
}