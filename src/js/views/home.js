import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Menu from "../component/menu";

const BackgroundVideo = () => {
	const videoSource = "https://drive.google.com/file/d/1XyL3dmQzFXgS5DTQCmRg0kNekX-CdMja/view?usp=sharing";
	return (
		<div className="container-welcome py auto">
			<video autoPlay="autoplay" loop="loop" muted>
				<source
					src="https://drive.google.com/file/d/1XyL3dmQzFXgS5DTQCmRg0kNekX-CdMja/view?usp=sharing"
					type="video/mp4"
				/>
				Your browser does not support the video tag
			</video>
		</div>
	);
};

export const Home = () => (
	<div className="container-welcome py-auto">
		<div className="text-center">
			<h1>Estoy list@ para recibir The Box</h1>
		</div>
		<div className="container-genders">
			<div className="container-soymujer">
				<Link to="/creaperfil">
					<h3>Soy Mujer</h3>
				</Link>
			</div>
			<div className="container-soyhombre">
				<Link to="/creaperfil">
					<h3>Soy Hombre</h3>
				</Link>
			</div>
		</div>
		<br />
		<div className="contactus-center">
			<center>
				<h5>
					¿Dudas?
					<br />
					<a href="https://wa.me/584122359117"> Contáctanos </a>
				</h5>
			</center>
		</div>
	</div>
);

export default BackgroundVideo;
