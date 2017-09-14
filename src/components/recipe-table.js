import React from 'react';
import { Link } from 'react-router-dom';

export default class RecipeTable extends React.Component {
    constructor(props) {
        super(props);
    };
    componentDidMount = () => {
        this.props.getRecipes();
    };
    render() {
        //making the rows to display
        let rows = [];
        this.props.data.forEach( (recipe) => {
            let path = '/recipe/' + recipe._id;
            rows.push(<tr key={recipe._id}>
                        
                        <td>
                            <Link to={path}><div className="link recipe-name">{recipe.name}</div></Link>
                        </td>
                        <td>{recipe.author}</td>
                        <td>{recipe.category}</td>
                        
                </tr>);
        });
        //returning the table
        return (
            <table className="table table-hover table-bordered table-striped table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Recipe</th>
                        <th>Author</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    };
}
