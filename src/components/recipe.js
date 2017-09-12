import React from 'react';
import moment from 'moment';
import IngredientsList from './ingredients-list.js';


export default class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			recipe: [],
			loading: true
		};
	};
	componentDidMount = () => {
		let id = this.props.match.params.recipeId;
		this.loadRecipe(id);
		
  	}
  	loadRecipe = (id) => {
  		
		let recipe = this.props.getRecipe(id);
		this.setState({ 
			recipe,
		}, this.setState({loading: false}));
  	}
	render() {
		
			if(this.state.loading) {
				return (
					<div>Recipe Loading....</div>
				);
			} else {
				return (
					<div className="recipe-display container-fluid">
							<div className="recipe-header">
								<h1>{this.state.recipe.name}</h1>
								<h3>By {this.state.recipe.author}</h3>
								<hr />
								<h4>Category: {this.state.recipe.category}</h4>
								<p className="recipe-date">Created: {moment(this.state.recipe.createdDate).format('MMMM Do YYYY, h:mm a')}</p>
								<p>Description: {this.state.recipe.description}</p>
								<div className="recipe-btns">						
									<button
										className="btn btn-danger pull-right btn-sm close-recipe"
										onClick={this.props.close}
										title="Close this Recipe">Close</button>
									<button
										className="btn btn-success pull-right btn-sm edit-recipe"
										onClick={this.props.edit}
										title="Edit this Recipe">Edit</button>
								</div>
							</div>
							<div className="recipe-body">
								<div className="recipe-timing">
									<p>Prep Time: {this.state.recipe.prepTime}</p>
									<p>Cook Time: {this.state.recipe.cookTime}</p>
								</div>
								<div className='ingredients panel panel-info'>
			    					<div className='panel-heading'>Ingredients:</div>
				        			<div className='panel-body'>
										<div className="ingredients-list">
											<IngredientsList ingredients={this.state.recipe.ingredients} />
										</div>
									</div>
								</div>
								<div className='directions panel panel-success'>
			    					<div className='panel-heading'>Directions:</div>
				        			<div className='panel-body'>
										{this.state.recipe.directions}
									</div>
								</div>
							</div>
						</div>
				);
			}

		
	}
}