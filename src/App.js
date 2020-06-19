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
	const [filteredKeywords, setfilteredWords] = useState({});

	console.log(filteredKeywords); //re rendering 16 times why? 
	console.count(); 
	useEffect(() => {
		if (programs.length === 0) {
			fetch("https://connection-youth.herokuapp.com/programs")
				.then((res) => res.json())
				.then((programs) => {
					setPrograms(programs);
				});
		}
		if (organizations.length === 0) {
			fetch("https://connection-youth.herokuapp.com/organizations")
				.then((res) => res.json())
				.then((organizations) => {
					setOrganizations(organizations);
				});
		}
	}, [programs, organizations]);

	const filterResults = (valuesObj) => {
		setfilteredWords(valuesObj); //testing state, delete after tests 
		const results = programs.filter((program) => {
			// IMPORTANT need to optimaztion for multiple render 
			// re renders are breaking the filter, by making keywords undefinded
			return  program.start_season === 'Summer'; //working fiter
			// return  program.location === 'Virtual'; //working filter
			// return program.categories.some((el) => el === "youth activities"); //working filter 
		});
		return results;
	};
	
	return (
		<fetchContext.Provider value={{programs, organizations, filterResults}}>
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
							<Results prgArray={filterResults()} />
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
