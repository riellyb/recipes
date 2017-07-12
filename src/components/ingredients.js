import React from 'react';

export default class Ingredients extends React.Component {
    constructor() {
        super();
        this.state = { value: [], count: 1 };
    };
    componentDidMount = () => {
        this.props.onRef(this)
    };
    componentWillUnmount = () => {
        this.props.onRef(undefined)
    };
    //clear all inputs and revert to 1
    clear = () => {
        this.state = { value: [], count: 1 };
    };
    //add value to state and update parent state
    handleChange = (i, event) => {
        let value = this.state.value.slice();
        value[i] = event.target.value;
        this.setState({ value });
        this.props.updateIngredients(this.state.value);
    };
    //add an ingredient
    addClick = () => {
        this.setState({ count: this.state.count + 1 });
    };
    //remove an ingredient
    removeClick = (i) => {
        let value = this.state.value.slice();
        value.splice(i, 1);
        this.setState({
            count: this.state.count - 1,
            value
        })
    };
    //creates the correct # of ingredient inputs
    createUI = () => {
        let uiItems = [];
        for (let i = 0; i < this.state.count; i++) {
            uiItems.push(
                <div key={i} className='form-group row'>
						<div className="col-xs-8 ">
							<input type='text'
								className='form-control'
								value={this.state.value[i] || ''}
								onChange={this.handleChange.bind(this,i)}
		  						name='ingredient'
		  						placeholder='Ingredient' />
		  				</div>
	                   	<div className="col-xs-4">
	                   		<input type='button'
                            className='btn-no-margin btn btn-danger'
                            value='x'
                            title="Remove this ingredient"
                            onClick={this.removeClick.bind(this,i)} />
	                   	</div>
	               </div>
            )
        }
        return uiItems || null;
    };

    render() {
        return (
            <div className='form-group row panel panel-info'>
    			<div className='panel-heading'>Ingredients:</div>
	        	<div className='panel-body'>
		        	{ this.createUI() }        
		          	<div className='form-group'>
		          		<input type='button'
				          	value='+'
                            title="Add an ingredient"
				          	className='btn btn-primary'
				          	onClick={this.addClick} />

          			</div>
          		</div>
  			</div>
        );
    }
}
