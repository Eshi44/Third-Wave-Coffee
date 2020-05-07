import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";

class SignIn extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="container">
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6">
							<h1>Sign-In</h1>
						</div>
						<div className="col-3"></div>
					</div>
				</div>
			</>
		);
	}
}
export default SignIn;