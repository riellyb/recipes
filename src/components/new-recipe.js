import React from 'react';


export default class NewRecipe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            ingredients: [],
            directions: [],
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
        console.log(this.state);
    };
    handleClearForm = (event) => {
        //we don't want the form to submit, so we prevent the default behavior
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
				<h2>Create a New Recipe</h2>
				<form onSubmit={this.handleSubmit} id="new-recipe">
					<input value={this.state.name}
          				onChange={this.handleNameChange}
          				type="text" name="name" placeholder="Name of Recipe"/>
					<input value={this.state.ingredients}
          				onChange={this.handleIngredientChange} type="text" name="ingredients" placeholder="Ingredients"/>
          			<input value={this.state.directions}
          				onChange={this.handleDirectionsChange} type="text" name="directions" placeholder="Directions"/>
          			<button  
          				type="submit"
          				form="new-recipe"
          				value="Submit"
          				className="btn btn-primary float-right">Submit</button>
          				<button
				          className="btn btn-warning float-left"
				          onClick={this.handleClearForm}>Clear form</button>
				</form>
			</section>
        );
    }
}
