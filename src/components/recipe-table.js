import React from 'react';
export default class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        //making the rows to display
        let rows = [];
        this.props.data.forEach( (recipe) => {
            rows.push(<tr onClick={() => this.props.openRecipe(recipe._id)} key={recipe._id}>
                            <td>
                                <div className="link recipe-name">{recipe.name}</div>
                            </td>
                        <td>{recipe.category}</td>
                </tr>);
        });
        //returning the table
        return (
            <table className="table table-hover table-bordered table-striped table-hover table-responsive">
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
