import React from 'react';
import IngredientsList from './ingredients-list.js';


export default class Recipe extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	data: this.props.data,
	    };
	};
	render() {
		return (

			<div className="recipe-display container-fluid">
				<div className="header">
					<h1>{this.state.data.name}</h1>
					<h2>By {this.state.data.author}</h2>
					<h4>Category: {this.state.data.category}</h4>
					<div className="recipe-date">{this.state.data.createdDate}</div>
					<button className="btn btn-danger pull-right btn-sm close-recipe" onClick={this.props.closeARecipe}>x</button>
				</div>
				<div className="recipe-body">
					<div className="recipe-timing">
						<div>Prep Time: {this.state.data.prepTime}</div>
						<div>Cook Time: {this.state.data.prepTime}</div>
					</div>
					<div className='ingredients row panel panel-info'>
    					<div className='panel-heading'>Ingredients:</div>
	        			<div className='panel-body'>
							<div className="ingredients-list">
								<IngredientsList ingredients={this.state.data.ingredients} />
							</div>
						</div>
					</div>
					<div className='directions row panel panel-success'>
    					<div className='panel-heading'>Directions:</div>
	        			<div className='panel-body'>
							{this.state.data.directions}
						</div>
					</div>
				</div>
			</div>
		);
	}
}