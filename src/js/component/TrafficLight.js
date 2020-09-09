import React, { useState } from "react";

export const TrafficLight = () => {
	const [clickedLight, setClickedLight] = useState(null);
	let redLight = "";
	if (clickedLight == "red") redLight = "selected";
	let yellowLight = "";
	if (clickedLight == "yellow") yellowLight = "selected";
	let greenLight = "";
	if (clickedLight == "green") greenLight = "selected";
	return (
		<div>
			<div id="trafficTop" />
			<div id="container">
				<div
					className={"red light " + redLight}
					onClick={() => setClickedLight("red")}>
					{" "}
				</div>
				<div
					className={"yellow light " + yellowLight}
					onClick={() => setClickedLight("yellow")}>
					{" "}
				</div>
				<div
					className={"green light " + greenLight}
					onClick={() => setClickedLight("green")}>
					{" "}
				</div>
			</div>
		</div>
	);
};
