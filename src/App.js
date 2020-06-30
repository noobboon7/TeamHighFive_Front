import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import HowItWorks from "./components/pages/HowItWorks";
import ShowPage from "./components/pages/ShowPage";
import Results from "./components/pages/Results";
import "./App.css";

import {fetchContext} from './fetchContext';

function App() {
	const [programs, setPrograms] = useState([]);
	const [organizations, setOrganizations] = useState([]);
	const [filteredProgramsArr, setFilteredProgramsArr] = useState([]);
	
	useEffect(() => {
		if (programs.length < 1) {
			fetch("https://connection-youth.herokuapp.com/programs")
				.then((res) => res.json())
				.then((programs) => {
					setPrograms(programs);
				});
		}
		if (organizations.length < 1) {
			fetch("https://connection-youth.herokuapp.com/organizations")
				.then((res) => res.json())
				.then((organizations) => {
					setOrganizations(organizations);
				});
		}
	}, [programs, organizations]);


	return (
		<fetchContext.Provider value={{programs, organizations, setFilteredProgramsArr}}>
			<Layout>
				<Switch>
					<Route
						exact
						path='/'
						render={(routerProps) => <Home />}
					/>

					<Route exact path='/about' render={(routerProps) => <About />} />
					<Route exact path='/contact' render={(routerProps) => <Contact />} />
					<Route
						exact
						path='/results'
						render={(routerProps) => (
							<Results prgArray={filteredProgramsArr} />
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
		</fetchContext.Provider>
	);
}

export default App;