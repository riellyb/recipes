import React from 'react';
import CategorySelect from './category-select.js';
import Ingredients from './ingredients.js';
import { Link } from 'react-router-dom';

export default class NewRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            category: '',
            description: '',
            ingredients: [],
            directions: [],
            author:'',
            prepTime: '',
            cookTime: '',            
            confirmation: false,
        };
    };
    //Event handler for all inputs
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    //Callback for Ingredients Child Component
    updateIngredients = (ingredients) => {
    	this.setState({
            ingredients
        });
    };
    updateCategory = (category) => {
    	this.setState({
            category
        });
    };
    //Submit new Recipe data to database and display confirmation message
    handleSubmit = (event) => {
        event.preventDefault();
        
        const params = {
        	'name': this.state.name,
        	'category': this.state.category,
          'description': this.state.description,
        	'ingredients': this.state.ingredients,
        	'directions': this.state.directions,
        	'author': this.state.author,
        	'prepTime': this.state.prepTime,
        	'cookTime': this.state.cookTime,
        };
        
        this.props.createRecipe(params);
      	this.handleClearForm(event);
      	this.setState({
            confirmation: true,
        });
    };
    //Clears form of data
    handleClearForm = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            category: '',            
            description: '',
            ingredients: [],
            directions: [],
            author:'',
            prepTime: '',
            cookTime: '',
        });
      	this.child.clear();
    };
    render() {
        return (
            <section className="new-recipe">
            	{ this.state.confirmation
	                ? <h3>Recipe Added!</h3>
	                : <h3></h3>
          		}
				<h2>Create a New Recipe</h2>
				<form className="container-fluid" onSubmit={this.handleSubmit} id="new-recipe">
					<div className="form-group row">
						<input className="form-control"
                  value={this.state.name}
          				onChange={this.handleChange}
          				type="text" name="name"
                  placeholder="Name of Recipe"/>
          			</div>
          			<CategorySelect updateCategory={this.updateCategory} />
          			<div className="form-group row">
                  <input className="form-control"
                        value={this.state.description}
                        onChange={this.handleChange}
                        type="text" name="description"
                        placeholder="Description"/>
                </div>
                <div className="form-group row">
      						<input className="form-control"
                        value={this.state.author}
                				onChange={this.handleChange}
                				type="text" name="author"
                        placeholder="Author (Your Name)"/>
          			</div>
          			<Ingredients onRef={ref => (this.child = ref)}
          				updateIngredients={this.updateIngredients} />
          			<div className="form-group row">
          				<textarea className="form-control"
	          				value={this.state.directions}
	          				onChange={this.handleChange}
	          				type="text"
	          				name="directions"
	          				placeholder="Directions..."></textarea>
          			</div>
          			<div className="form-group row">
						<input className="form-control"
                value={this.state.prepTime}
        				onChange={this.handleChange}
        				type="text" name="prepTime"
                placeholder="Prep Time (hours and minutes)"/>
          			</div>
          			<div className="form-group row">
						<input className="form-control"
                value={this.state.cookTime}
        				onChange={this.handleChange}
        				type="text" name="cookTime"
                placeholder="Cook Time (hours and minutes)"/>
          			</div>
          	<div className="form-group row">
          				<button  
            				type="submit"
            				form="new-recipe"
            				value="Submit"
                    title="Submit your recipe"
            				className="btn btn-success float-right">Create Recipe</button>
          				<button
				          className="btn btn-warning float-left"
                    title="Clear the recipe form"
  				          onClick={this.handleClearForm}>Clear form</button>
                    <Link to='/'><button
                    className="btn btn-danger float-left"
                    title="Cancel"
                    >Cancel</button></Link>
				    </div>
				</form>
			</section>
        );
    }
}
