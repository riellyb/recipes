import React from 'react';

export default class Ingredients extends React.Component {
    constructor () {
        super();
        this.state = { value: [], count: 1 };
    };
    handleChange = (i, event) => {
        let value = this.state.value.slice();
        value[i] = event.target.value;
        this.setState({ value });
    };
    addClick = () => {
        this.setState({ count: this.state.count + 1 });
    };
    removeClick = (i) => {
        let value = this.state.value.slice();
        value.splice(i, 1);
        this.setState({
            count: this.state.count - 1,
            value
        })
    };
    createUI = () => {
	     let uiItems = [];
	     for(let i = 0; i < this.state.count; i++){
	           uiItems.push(
	               <div key={i} className='form-group row'>
						<div className="col-xs-8 ">
							<input type='text'
								className='form-control'
								value={this.state.value[i] || ''}
								onChange={this.handleChange.bind(this,i)}
		  						name='ingredients'
		  						placeholder='Ingredients' />
		  				</div>
	                   	<div className="col-xs-4 ">
	                   		<input type='button' className='btn btn-secondary' value='Remove this ingredient' onClick={this.removeClick.bind(this,i)}/>
	                   	</div>
	               </div>
	            )
	     }
	     return uiItems || null;
	};

    render() {
        return (
        	<div>
	        	{ this.createUI() }        
	          	<div className='form-group row'>
	          		<input type='button'
			          	value='Add another ingredient'
			          	className='btn btn-success'
			          	onClick={this.addClick}/>
	          	</div>
  			</div>
        );
    }
}
