import React, { useState } from "react";
import "./Crew.css";
import data from "../assets/data/data.json";

const Crew = () => {
	const [actualCrew, setActualCrew] = useState("Douglas Hurley");

	const lowerCaseCrew = actualCrew.replace(/\s+/g, "-").toLowerCase();
	const crewImage =
		require(`../assets/images/crew/image-${lowerCaseCrew}.webp`).default;

	return (
		<div className="crew-container">
			<h5>meet your crew</h5>
			<div className="image-container">
				<img src={crewImage} alt="" />
			</div>
		</div>
	);
};

export default Crew;
