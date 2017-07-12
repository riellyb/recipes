import React from 'react';
import moment from 'moment';
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
				<div className="recipe-header">
					<h1>{this.state.data.name}</h1>
					<h3>By {this.state.data.author}</h3>
					<hr />
					<h4>Category: {this.state.data.category}</h4>
					<p className="recipe-date">Created: {moment(this.state.data.createdDate).format('MMMM Do YYYY, h:mm a')}</p>
					<div className="recipe-btns">						
						<button
							className="btn btn-danger pull-right btn-sm close-recipe"
							onClick={this.props.close}
							title="Close this Recipe">x</button>
						<button
							className="btn btn-success pull-right btn-sm edit-recipe"
							onClick={this.props.edit}
							title="Edit this Recipe">Edit</button>
					</div>
				</div>
				<div className="recipe-body">
					<div className="recipe-timing">
						<p>Prep Time: {this.state.data.prepTime}</p>
						<p>Cook Time: {this.state.data.cookTime}</p>
					</div>
					<div className='ingredients panel panel-info'>
    					<div className='panel-heading'>Ingredients:</div>
	        			<div className='panel-body'>
							<div className="ingredients-list">
								<IngredientsList ingredients={this.state.data.ingredients} />
							</div>
						</div>
					</div>
					<div className='directions panel panel-success'>
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