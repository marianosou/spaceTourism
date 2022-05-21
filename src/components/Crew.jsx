import React, { useState } from "react";
import "./Crew.css";
import data from "../assets/data/data.json";

const Crew = () => {
	const [actualCrew, setActualCrew] = useState("Douglas Hurley");

	const crewData = data.crew.find(member => member.name === actualCrew);

	let crewName = actualCrew.toLocaleLowerCase().split(" ").join("-");
	const crewImage =
		require(`../assets/images/crew/image-${crewName}.webp`).default;

	return (
		<div className="crew-container">
			<h5>meet your crew</h5>
			<div className="image-container">
				<img src={crewImage} alt="" />
			</div>
			<section className="crew-menu">
				{data.crew.map(member => (
					<div
						key={member.name}
						className={
							actualCrew === member.name ? "crewSelected" : "crewUnselected"
						}
						onClick={() => setActualCrew(member.name)}
					></div>
				))}
			</section>
			<section className="crew-details">
				<h3>{crewData.role}</h3>
				<h1>{crewData.name}</h1>
				<p>{crewData.bio}</p>
			</section>
		</div>
	);
};

export default Crew;
