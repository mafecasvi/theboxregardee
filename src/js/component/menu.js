import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Formulario from "./formulario";
import Formularioestilos from "./formularioestilos";

function Menu() {
	return (
		<Router>
			<Switch>
				<Route exact path="/creaperfil" component={Formulario} />
			</Switch>
		</Router>
	);
}

export default Menu;
