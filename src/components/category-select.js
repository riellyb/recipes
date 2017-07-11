import React from 'react';

export default class Ingredients extends React.Component {
    constructor() {
        super();
        this.state = { selectValue: '' };
    };
    handleChange = (e) => {
        this.setState({ selectValue: e.target.value });
        this.props.updateCategory(this.state.selectValue);
    };

    render() {
    	let value     = this.state.selectValue;
	    let className = 'form-control ';
	    if(!value) {
	    	className = className + 'placeholder'
	    }
        return (
            <div className='form-group row'>
    			<select placeholder="Select a Category" className={className} defaultValue={this.state.selectValue} 
 					onChange={this.handleChange} >
 					<option value=''>Select a Category...</option>
				    <option value="Breakfast">Breakfast</option>
					<option value="Lunch">Lunch</option>
					<option value="Beverages">Beverages</option>
					<option value="Appetizers">Appetizers</option>
					<option value="Soups">Soups</option>
					<option value="Salads">Salads</option>
					<option value="Main dishes: Beef">Main dishes: Beef</option>
					<option value="Main dishes: Poultry">Main dishes: Poultry</option>
					<option value="Main dishes: Pork">Main dishes: Pork</option>
					<option value="Main dishes: Seafood">Main dishes: Seafood</option>
					<option value="Main dishes: Vegetarian">Main dishes: Vegetarian</option>
					<option value="Side dishes: Vegetables">Side dishes: Vegetables</option>
					<option value="Side dishes: Other">Side dishes: Other</option>
					<option value="Desserts">Desserts</option>
					<option value="Canning / Freezing">Canning / Freezing</option>
					<option value="Breads">Breads</option>
					<option value="Holidays">Holidays</option>
					<option value="Entertaining">Entertaining</option>
				 </select>
  			</div>
        );
    }


}
