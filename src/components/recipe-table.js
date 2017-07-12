import React from 'react';
export default class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
    };
    openRecipe = (recipeId) => {
        event.preventDefault();
        console.log('event: ' + event + 'recipeId: ' + recipeId);
        this.props.openRecipe(recipeId);
    };
    render() {
        //making the rows to display
        let rows = [];
        this.props.data.forEach( (recipe) => {
            rows.push(<tr key={recipe._id}>
                            <td>
                                <a href="" onClick={() => this.openRecipe(recipe._id)}>{recipe.name}</a>
                            </td>
                        <td>{recipe.category}</td>    
                        <td>{recipe._id}</td>
                </tr>)
        });
        //returning the table
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}
