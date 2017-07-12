import React from 'react';

export default class IngredientsList extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        let ingredientList = [];
        this.props.ingredients.forEach( (ingredient, index) => {
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
