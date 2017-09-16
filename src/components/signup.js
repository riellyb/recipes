import React from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email : '',
			password : '',
		};
	};
	 //Event handler for all inputs
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
	handleSubmit = () => {

		this.props.userSignup(this.state.email, this.state.password);
	};

	render() {
		return (
			<div className="container">

				<div className="col-sm-6 col-sm-offset-3">

				    <h1><span className="fa fa-sign-in"></span> Signup</h1>

				    <form>
				        <div className="form-group">
				            <label>Email</label>
				            <input type="text" className="form-control" name="email" />
				        </div>
				        <div className="form-group">
				            <label>Password</label>
				            <input type="password" className="form-control" name="password" />
				        </div>

				        <button onClick={this.handleSubmit.bind(this)} type="submit" className="btn btn-warning btn-lg">Signup</button>
				    </form>

				    <hr />

				    <p>Already have an account? <Link to="/login">Login</Link></p>
				    <p>Or go <Link to="/">home</Link>.</p>

				</div>

			</div>
		);
	}
}