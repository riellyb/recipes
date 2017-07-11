import React from 'react';
import axios from 'axios';

export default class NewRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            ingredients: [],
            directions: [],
            confirmation: false,
        };
    }
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };
    handleIngredientChange = (event) => {
        this.setState({ ingredients: event.target.value });
    };
    handleDirectionsChange = (event) => {
        this.setState({ directions: event.target.value });
    };
    handleSubmit = (event) => {
        //we don't want the form to submit, so we prevent the default behavior
        event.preventDefault();
        //TODO actually handle the form and send the input values to our API
        const params = {
        	'name': this.state.name,
        	'ingredients': this.state.ingredients,
        	'directions': this.state.directions,
        };
        axios.post('http://localhost:3000/recipes', params)
      		.then(res => {
      			console.log(res);
        		const recipes = res.data;
        		this.setState({ 
        			recipes: recipes,
        			filteredData: recipes,
        		});
      		});

      	this.handleClearForm(event);
      	this.setState({
            confirmation: true,
        });
    };
    handleClearForm = (event) => {
        event.preventDefault();
        this.setState({
            name: '',
            ingredients: [],
            directions: [],
        });
    };
    render() {
        return (
            <section className="new-recipe">
            	{ this.state.confirmation
	                ? <h3>Recipe Added!</h3>
	                : <h3></h3>
          		}
				<h2>Create a New Recipe</h2>
				<form onSubmit={this.handleSubmit} id="new-recipe">
					<div className="form-group row">
						<input className="form-control" value={this.state.name}
          				onChange={this.handleNameChange}
          				type="text" name="name" placeholder="Name of Recipe"/>
          			</div>
					<div className="form-group row">
						<input className="form-control" value={this.state.ingredients}
          				onChange={this.handleIngredientChange} type="text" name="ingredients" placeholder="Ingredients"/>
          			</div>
          			<div className="form-group row">
          				<input className="form-control" value={this.state.directions}
          				onChange={this.handleDirectionsChange} type="text" name="directions" placeholder="Directions"/>
          			</div>
          			<div className="form-group row">
          				<button  
          				type="submit"
          				form="new-recipe"
          				value="Submit"
          				className="btn btn-primary float-right">Submit</button>
          				<button
				          className="btn btn-warning float-left"
				          onClick={this.handleClearForm}>Clear form</button>
				    </div>
				</form>
			</section>
        );
    }
}
