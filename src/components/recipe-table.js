import React from 'react';
export default class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
    };
    // openRecipe = (recipeId) => {
    //     event.preventDefault();
    //     this.props.openRecipe(recipeId);
    // };
    render() {
        //making the rows to display
        let rows = [];
        this.props.data.forEach( (recipe) => {
            rows.push(<tr key={recipe._id}>
                            <td>
                                <div className="link recipe-name" onClick={() => this.props.openRecipe(recipe._id)}>{recipe.name}</div>
                            </td>
                        <td>{recipe.category}</td>
                </tr>);
        });
        //returning the table
        return (
            <table className="table table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}
