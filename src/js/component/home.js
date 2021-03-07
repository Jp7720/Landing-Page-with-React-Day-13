import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotrom";
import { Card } from "./Card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="p-3 mb-2 bg-gradient-dark text-dark" />
			<Navbar />
			<Jumbotron />
			<Card />

			<Footer />
		</div>
	);
}
