//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { Home } from "./views/home";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.min.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

export class EntireWebsiteLayout extends React.Component {
	render() {
		return (
			<div>
				<Home />
				{/* <HowItWorks />
				<MyProfile />
				<ContactUs /> */}
			</div>
		);
	}
}
