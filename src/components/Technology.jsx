import React, { useState } from "react";
import "./Technology.css";
import data from "../assets/data/data.json";

const Technology = () => {
	const [actualTech, setActualTech] = useState("Launch vehicle");

	const techData = data.technology.find(
		technology => technology.name === actualTech
	);

	const lowerCaseTech = actualTech.replace(/\s+/g, "-").toLowerCase();
	const techImage =
		require(`../assets/images/technology/image-${lowerCaseTech}-landscape.jpg`).default;

	return (
		<div className="tech-container">
			<h5>space launch 101</h5>
			<img src={techImage} alt="" />
			<section className="tech-menu">
				{data.technology.map((technology, index) => (
					<div
						key={technology.name}
						className={
							actualTech === technology.name ? "techSelected" : "techUnselected"
						}
						onClick={() => setActualTech(technology.name)}
					>
						{index + 1}
					</div>
				))}
			</section>
			<section className="tech-details">
				<h3>The terminology...</h3>
				<h1>{techData.name}</h1>
				<p>{techData.description}</p>
			</section>
		</div>
	);
};

export default Technology;
