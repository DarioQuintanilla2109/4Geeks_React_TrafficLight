import React from "react";

export default class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		let redLight = "";
		if (this.state.clickedLight == "red") redLight = "selected";
		let yellowLight = "";
		if (this.state.clickedLight == "yellow") yellowLight = "selected";
		let greenLight = "";
		if (this.state.clickedLight == "green") greenLight = "selected";
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + redLight}
						onClick={() => this.setState({ clickedLight: "red" })}>
						{" "}
					</div>
					<div
						className={"yellow light " + yellowLight}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}>
						{" "}
					</div>
					<div
						className={"green light " + greenLight}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}>
						{" "}
					</div>
				</div>
			</div>
		);
	}
}
