import React from 'react';

export default class IngredientsList extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        let ingredientList = [];
        this.props.ingredients.forEach( (ingredient) => {
            ingredientList.push(
                <li key={ingredient}>{ingredient}</li> 
            )
        });
        return (
            <ul>
                {ingredientList}
            </ul>
        );
    };
}
