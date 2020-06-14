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
  const [organizations, setOrganizations] = useState([]);
  useEffect(() => {
    if (organizations.length === 0) {
      fetch("https://connection-youth.herokuapp.com/organizations")
        .then((res) => res.json())
        .then((orgs) => setOrganizations(orgs));
    }
  }, [organizations]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" render={(routerProps) => <Home />} />
        <Route exact path="/about" render={(routerProps) => <About />} />
        <Route exact path="/contact" render={(routerProps) => <Contact />} />
        <Route
          exact
          path="/results"
          render={(routerProps) => <Results organizations={organizations} />}
        />
        <Route
          exact
          path="/howItWorks"
          render={(routerProps) => <HowItWorks />}
        />
        <Route exact path="/organization/:id" component={ShowPage} />
  
      </Switch>
    </Layout>
  );
}

export default App;
