import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";

class SignUp extends Component {
	render() {
		const bckcolor = {
            backgroundColor: "#fff0d9",
            height: 500
        };
		return (
			<>
				<NavBar />
				<div className="container-fluid" style={bckcolor}>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6">
							<h1>Create Account</h1>
						</div>
						<div className="col-3"></div>
					</div>
				</div>
			</>
		);
	}
}
export default SignUp;