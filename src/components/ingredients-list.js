import React from 'react';

export default class IngredientsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients : this.props.ingredients || []
        }
    };
    render() {
        let ingredientList = [];
        this.state.ingredients.forEach( (ingredient, index) => {
            ingredientList.push(
                <li key={index}>{ingredient}</li> 
            )
        });
        return (
            <ul>
                {ingredientList}
            </ul>
        );
    };
}
