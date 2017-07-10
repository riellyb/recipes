import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header.js';
import Sidebar from './components/sidebar.js';
import Main from './components/main.js';

require('./scss/style.scss');


class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	numberOfRecipes: 45,
	    	numberOfUpdates: 0,
	    	mainContent: 'Main Content has been updated ',
	    	newRecipe: false,
	    };
	};

	updateMain = () => {
		this.setState(prevState => ({
			numberOfUpdates: prevState.numberOfUpdates + 1,
			newRecipe: false,
        }));
	};
	newRecipe = () => {
		this.setState({
			newRecipe: true,
        });
	};
	render() {
		return (
			<div>
				<Header />
				<Sidebar newRecipe={this.newRecipe} updateMain={this.updateMain} numberOfRecipes={this.state.numberOfRecipes} />
				<Main newRecipe={this.state.newRecipe} numberOfUpdates={this.state.numberOfUpdates} content={this.state.mainContent} />
			</div>
		);
	};
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);