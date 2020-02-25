import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import Menu from "../component/menu";

export const Home = () => (
	<div className="container-welcome py-auto">
		<div className="text-center">
			<h1>Estoy list@ para recibir The Box</h1>
		</div>
		<div className="container-genders">
			<div className="container-soyhombre">
				<Link to="/creaperfil">Soy hombre</Link>
			</div>
			<div className="container-soymujer">
				<Link to="/creaperfil">Soy Mujer</Link>
			</div>
		</div>
		<div className="contactus-center">
			<h2>Contáctanos</h2>
		</div>
	</div>
);
