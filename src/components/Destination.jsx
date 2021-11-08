import React, { useState } from "react";
import "./Destination.css";
import data from "../assets/data/data.json";

const Destination = () => {
	const [actualDestination, setActualDestination] = useState("Moon");

	const destinationData = data.destination.find(
		destination => destination.name === actualDestination
	);

	const lowercaseDestination = actualDestination.toLowerCase();
	const destinationImage =
		require(`../assets/images/destination/image-${lowercaseDestination}.webp`).default;

	return (
		<div className="destination-container">
			<div className="background"></div>
			<h5>pick your destination</h5>
			<img src={destinationImage} alt="" />
			<div className="destination-menu">
				{data.destination.map(destination => (
					<p
						key={destination.name}
						onClick={() => setActualDestination(destination.name)}
						className={
							actualDestination === destination.name ? "menuUnderline" : ""
						}
					>
						{destination.name}
					</p>
				))}
			</div>
			<section className="destination-title">
				<h1>{destinationData.name}</h1>
				<p>{destinationData.description}</p>
			</section>
			<hr />
			<section className="destination-details">
				<h6>Avg. Distance</h6>
				<p>{destinationData.distance}</p>
			</section>
			<section className="destination-details">
				<h6>Est. Travel Time</h6>
				<p>{destinationData.travel}</p>
			</section>
		</div>
	);
};

export default Destination;
