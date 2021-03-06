import React, { Component } from "react";
import NavBar from "../../components/Shared/NavBar/NavBar";
import axios from "axios";
import Form from "../../components/Shared/Form/FormSignUp";
import "../../components/Shared/Form/Form.css";

class SignUp extends Component {
	state = {
		//controlled input
		username: "",
		password: "",
		//empty string is 'falsey'
		error: "",
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			error: "",
		});
	};
	componentDidMount() {
		console.log(this.state.username);
	}

	handleSubmit = (event, username, password) => {
		event.preventDefault();

		axios
			.post("/api/user/register", {
				username,
				password,
			})
			.then(async (response) => {
				console.log("Here is the response data");
				console.log(response);
				console.log("this is the token" + response.data);
				//store token in local storage
				localStorage.setItem("jwtToken", response.data);
				localStorage.setItem("username", username);
				await this.props.history.push(`/dashboard/${username}`);
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				this.setState({ error: "User already exists" });
			});
	};

	render() {
		return (
			<>
				<NavBar />
				<Form handleSubmit={this.handleSubmit} error={this.state.error} />
			</>
		);
	}
}
export default SignUp;
