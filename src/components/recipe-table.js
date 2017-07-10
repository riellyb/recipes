import React from 'react';
export default class RecipeTable extends React.Component {

    render() {
        //making the rows to display
        var rows = [];
        this.props.data.forEach(function(recipe) {
            rows.push(<tr key={recipe.id}><td>{recipe.name}</td></tr>)
        });
        //returning the table
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}
