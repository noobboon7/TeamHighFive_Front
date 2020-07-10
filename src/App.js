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
	const sessionPrograms = sessionStorage.getItem('allPrograms')
	// console.log(sessionStorage.allPrograms, programs);
	console.log(programs);
	// application breaks when cookies/sessionStorage is cleared
	// break cannot read null in one of the search Component
	useEffect(() => {
		if(sessionStorage.userSelects2){
			let arr = JSON.parse(sessionStorage.userSelects2);
			setFilteredProgramsArr(arr);
		}
		// ensuring only 1 api request is made for all programs in the session
		if (!programs.length && !sessionPrograms) {
			console.count('set:')
			fetch("https://connection-youth.herokuapp.com/programs")
				.then((res) => res.json())
				.then((programs) => {
					setPrograms(programs);
					sessionStorage.setItem('allPrograms', JSON.stringify(programs));
				});
		}
		if(!programs.length) setPrograms(JSON.parse(sessionPrograms)) 

		if (!organizations.length) {
			fetch("https://connection-youth.herokuapp.com/organizations")
				.then((res) => res.json())
				.then((organizations) => {
					setOrganizations(organizations);
				});
		}
		// return 
	}, [programs, organizations, sessionPrograms]);


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
						path='/programs'
						render={(routerProps) => (
							<Results allPrograms={programs} homeFilterArr={filteredProgramsArr} />
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