import React from 'react';
import ReactDOM from 'react-dom';


class Header extends React.Component {
	render() {
		return (
			<nav style={{padding: '40px', boxSizing: 'border-box', height: '200px', backgroundColor: '#ccc'}}>
				<h1>React App</h1>
				<h3>This is the Header</h3>
			</nav>
		);
	}
}

class Sidebar extends React.Component {
	render() {
		return (
			<aside style={{boxSizing: 'border-box', backgroundColor: '#00ff00',float: 'left', width: '30%', padding: '40px'}}>
				<h2>This is the sidebar</h2>
				<button onClick={this.props.updateMain} className="btn btn-primary">Browse {this.props.numberOfRecipes} Recipes</button>
				<button className="btn btn-primary">Search Recipes</button>
				<button className="btn btn-primary">New Recipe</button>
			</aside>
		);
	}
}

class Main extends React.Component {
	render() {
		return (
			<section style={{boxSizing: 'border-box', backgroundColor: '#ff0000', float: 'right', width: '70%', padding: '40px'}}>
				<h2>{this.props.content}</h2>
			</section>
		);
	}
}

class App extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	numberOfRecipes: 45,
	    	mainContent: 'This is the Main Content'
	    };
	}

	updateMain = () => {
		this.setState({
			mainContent: 'Main Content has been updated!'
		});
	}
	render() {
		return (
			<div>
				<Header />
				<Sidebar updateMain={this.updateMain} numberOfRecipes={this.state.numberOfRecipes} />
				<Main content={this.state.mainContent} />
			</div>
		);
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);