import React from 'react';
export default class RecipeTable extends React.Component {

    render() {
        //making the rows to display
        let rows = [];
        this.props.data.forEach(function(recipe) {
            rows.push(<tr key={recipe._id}><td>{recipe.name}</td><td>{recipe.category}</td></tr>)
        });
        //returning the table
        return (
            <table className="table">
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
