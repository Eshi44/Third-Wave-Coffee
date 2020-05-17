import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Preferences.css";
import SmallCup from "../../images/small-cup.png";
import MedCup from "../../images/medium-cup.png";
import LargeCup from "../../images/large-cup.png";
import LightRoast from "../../images/light-roast.png";
import MedRoast from "../../images/medium-roast.png";
import DarkRoast from "../../images/dark-roast.png";
import StrongStrength from "../../images/strong-strength.png";
import MediumStrength from "../../images/medium-strength.png";
import WeakStrength from "../../images/weak-strength.png";
import axios from "axios";
import $ from "jquery";
import { Redirect } from "react-router";

class Chemex extends Component {
	state = {
		name: "",
		redirect: false,
	};

	setRedirect = () => {
		var method = $("#preferencesHeader").html();
		var strength = document.querySelectorAll("input[name=strength]:checked")[0]
			.value;
		var size = document.querySelectorAll("input[name=size]:checked")[0].value;
		var roast = document.querySelectorAll("input[name=roast]:checked")[0].value;

		this.saveDrink(method, strength, size, roast);

		// this.setState({
		// 	redirect: true,
		// });
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return (
				<Redirect
					to={{
						pathname: "/brew",
					}}
				/>
			);
		}
	};



	saveDrink(method, strength, size, roast) {
		const username = localStorage.getItem("username");
		axios
			.post(`/api/brew/${username}`, {
				method,
				size,
				strength,
				roast,
			})
			.then(async (response) => {
				console.log("SAVE SUCCESS - RESPONSE DATA BELOW");
				console.log(response);
				console.log(response.data.drinks[(response.data.drinks.length - 1)]);
				console.log(size);
				console.log(strength);
				console.log(roast);
				if (localStorage.getItem("drinkID") !== "")
					localStorage.removeItem("drinkID");
				localStorage.setItem("drinkID", response.data.drinks[(response.data.drinks.length - 1)]);
				this.setState({
					redirect: true,
				});

			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidMount() {
		var queryString = window.location.search;
		var brewMethod = queryString.split("?")[1];
		this.setState({ name: brewMethod });

	}

	render() {
		return (
			<>
				<div>
					<Header name={this.state.name} />
				</div>
				<div className="container" id="cardCalculation">
					<div className="card" id="card-body">
						<div className="card-body">
							<h3 id="desiredTextFirst">Desired Quantity:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="size"
											value="Small"
											className="img-responsive"
											alt="Small Cup"
											id="hideRadioBtn"
										/>
										<img id="inputOne" src={SmallCup} />
									</label>
									<p id="textsml">Small</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="size"
											value="Medium"
											className="img-responsive"
											alt="Medium Cup"
											id="hideRadioBtn"
										/>
										<img id="inputTwo" src={MedCup} />
									</label>
									<p id="textsml">Medium</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="size"
											value="Large"
											className="img-responsive"
											alt="Large Cup"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={LargeCup} />
									</label>
									<p id="textsml">Large</p>
								</div>
							</div>
							<h3 id="desiredText">Desired Strength:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="weak"
											name="strength"
											value="Weak"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={WeakStrength} />
									</label>
									<label id="textwms">Weak </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="med"
											name="strength"
											value="Medium"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={MediumStrength} />
									</label>
									<label id="textwms">Medium </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="strong"
											name="strength"
											value="Strong"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={StrongStrength} />
									</label>
									<label id="textwms">Strong</label>
								</div>
							</div>
							<h3 id="desiredText">Desired Bean Roast:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Light"
											className="img-responsive"
											alt="Light Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputOne" src={LightRoast} />
									</label>
									<p id="textlmd">Light</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Medium"
											className="img-responsive"
											alt="Med Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputTwo" src={MedRoast} />
									</label>
									<p id="textlmd">Medium</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Dark"
											className="img-responsive"
											alt="Dark Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputThree" src={DarkRoast} />
									</label>
									<p id="textlmd">Dark</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div
							className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center"
							id="tracker"
						>
							{this.renderRedirect()}
							<button
								type="button"
								id="brew-btn"
								className="btn btn-primary"
								onClick={this.setRedirect}
							>
								Brew!
							</button>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
					</div>
				</div>
			</>
		);
	}
}
export default Chemex;
