import React, { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import HowItWorks from "./components/pages/HowItWorks";
import ShowPage from "./components/pages/ShowPage";
import Results from "./components/pages/Results";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
	const [programs, setPrograms] = useState([]);

	useEffect(() => {
		if (programs.length === 0) {
			fetch("https://connection-youth.herokuapp.com/programs")
				.then((res) => res.json())
				.then((programs) => {
					setPrograms(programs);
				});
		}
	}, [programs]);

	return (
		<Layout>
			<Switch>
				<Route
					exact
					path='/'
					render={(routerProps) => <Home programArray={programs} />}
				/>
				<Route exact path='/about' render={(routerProps) => <About />} />
				<Route exact path='/contact' render={(routerProps) => <Contact />} />
				<Route
					exact
					path='/results'
					render={(routerProps) => (
						<Results prgArray={programs} />
					)}
				/>
				<Route
					exact
					path='/howItWorks'
					render={(routerProps) => <HowItWorks />}
				/>
				<Route exact path='/organization/:id' component={ShowPage} />
			</Switch>
		</Layout>
	);
}

export default App;
