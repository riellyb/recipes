import React from 'react';

export default class Search extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	query: '',
	    };
	};
	//Set query to value of input and filter the recipe table
	doSearch = (e) => {
		this.setState({
      		query: e.target.value,
    	}, () => {
    		this.props.doSearch(this.state.query);
    	});
    };
	render() {
		return (

			<div className="form-group">
				<input className="form-control" type="text" ref="searchInput" placeholder="Search" value={this.state.query} onChange={this.doSearch}/>
			</div>
		);
	}
}