import React from 'react';
import CategorySelect from './category-select.js';
import Ingredients from './ingredients.js';
import axios from 'axios';

export default class UpdateRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.recipeId,
            deleted: false,
            name: '',
            category: '',
            description: '',
            ingredients: [],
            directions: '',
            author: '',
            prepTime: '',
            cookTime: '',
            loading: true,
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
        	'cookTime': this.state.cookTime
        };
        
        this.props.updateRecipe(params);
      	this.handleClearForm(event);
    };
    handleClearForm = (event) => {
        event.preventDefault();
        this.setState({
          id: '',
          name: '',
          category: '',
          description: '',
          ingredients: [],
          directions: '',
          author: '',
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
    loadRecipe = (id) => {
      
      self = this;
      axios.get('http://localhost:3000/recipes/' + id)
            .then(res => {
              let recipe = res.data;
              console.log(res.data);
              self.setState({ 
                'id': res.data.id,
                'name': res.data.name,
                'category': res.data.category,
                'description': res.data.description,
                'ingredients': res.data.ingredients,
                'directions': res.data.directions,
                'author': res.data.author,
                'prepTime': res.data.prepTime,
                'cookTime': res.data.cookTime,
              }, self.setState({loading: false}));
      });
      
    };
    componentDidMount = () => {
      this.loadRecipe(this.state.id);
      
    };
    render() {
          if(this.state.loading) {
        return (
          <div>Recipe Loading....</div>
        );
      } else {
        return(
          <section className="update-recipe">
    				<h2>Update {this.state.recipe.name} Recipe</h2>
            <div className="recipe-btns">           
                <button
                  className="btn btn-danger pull-right btn-sm close-recipe"
                  onClick={this.props.close}
                  title="Close this Recipe">x</button>
            </div>
    				<form className="container-fluid" onSubmit={this.handleSubmit} id="new-recipe">
    					<div className="form-group row">
    						<input className="form-control"
                      value={this.state.recipe.name}
              				onChange={this.handleChange}
              				type="text" name="name"
                      placeholder="Name of Recipe"/>
              			</div>
              			<CategorySelect value={this.state.category} updateCategory={this.updateCategory} />
              			<div className="form-group row">
                  <input className="form-control"
                        value={this.state.recipe.description}
                        onChange={this.handleChange}
                        type="text" name="description"
                        placeholder="Description"/>
                </div>
                    <div className="form-group row">
    						<input className="form-control"
                      value={this.state.recipe.author}
              				onChange={this.handleChange}
              				type="text" name="author"
                      placeholder="Author (Your Name)"/>
              			</div>
              			<Ingredients value={this.state.recipe.ingredients}
                      onRef={ref => (this.child = ref)}
              				updateIngredients={this.updateIngredients} />
              			<div className="form-group row">
              				<textarea className="directions-text form-control"
    	          				value={this.state.recipe.directions}
    	          				onChange={this.handleChange}
    	          				type="text"
    	          				name="directions"
    	          				placeholder="Directions..."></textarea>
              			</div>
              			<div className="form-group row">
    						<input className="form-control"
                    value={this.state.recipe.prepTime}
            				onChange={this.handleChange}
            				type="text" name="prepTime"
                    placeholder="Prep Time (hours and minutes)"/>
              			</div>
              			<div className="form-group row">
    						<input className="form-control"
                    value={this.state.recipe.cookTime}
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
                				className="btn btn-success float-right
                        onClick={this.props.updateRecipe}">Update {this.state.recipe.name} Recipe</button>
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
}
