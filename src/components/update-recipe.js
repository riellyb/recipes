import React from 'react';
import CategorySelect from './category-select.js';
import Ingredients from './ingredients.js';

export default class UpdateRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.data._id || '',
            name: this.props.data.name || '',
            category: this.props.data.category || '',
            description: this.props.data.description || '',
            ingredients: this.props.data.ingredients || [],
            directions: this.props.data.directions || '',
            author: this.props.data.author || '',
            prepTime: this.props.data.prepTime || '',
            cookTime: this.props.data.cookTime || '',
            deleted: false,
        };
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
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
    handleSubmit = (event) => {
        //we don't want the form to submit, so we prevent the default behavior
        event.preventDefault();
        
        const params = {
          'id': this.state.id,
        	'name': this.state.name,
        	'category': this.state.category,
          'description': this.state.description,
        	'ingredients': this.state.ingredients,
        	'directions': this.state.directions,
        	'author': this.state.author,
        	'prepTime': this.state.prepTime,
        	'cookTime': this.state.cookTime,
        };
        
        this.props.updateRecipe(params);
      	this.handleClearForm(event);
    };
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
    deleteRecipe = () => {      
      if(confirm('Are you sure you want to permanently delete this recipe?')) {
        this.props.deleteARecipe(this.state.id);
        this.setState({
            deleted: true,
        });
        this.handleClearForm(event);
      }
    };
    render() {
        return (
          <section className="update-recipe">
    				<h2>Update {this.state.name} Recipe</h2>
            <div className="recipe-btns">           
                <button
                  className="btn btn-danger pull-right btn-sm close-recipe"
                  onClick={this.props.close}
                  title="Close this Recipe">x</button>
            </div>
    				<form className="container-fluid" onSubmit={this.handleSubmit} id="new-recipe">
    					<div className="form-group row">
    						<input className="form-control"
                      value={this.state.name}
              				onChange={this.handleChange}
              				type="text" name="name"
                      placeholder="Name of Recipe"/>
              			</div>
              			<CategorySelect value={this.state.category} updateCategory={this.updateCategory} />
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
              			<Ingredients value={this.state.ingredients}
                      onRef={ref => (this.child = ref)}
              				updateIngredients={this.updateIngredients} />
              			<div className="form-group row">
              				<textarea className="directions-text form-control"
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
                        title="Update your recipe"
                				className="btn btn-success float-right">Update {this.state.name} Recipe</button>
              				<button
      				          className="btn btn-warning float-left"
                        title="Clear the recipe form"
      				          onClick={this.handleClearForm}>Clear form</button>
                      <button
                        className="btn btn-danger float-left"
                        title="Delete"
                        onClick={this.deleteRecipe}>Delete</button>
    				    </div>
    				</form>
			</section>
        );
    }
}
