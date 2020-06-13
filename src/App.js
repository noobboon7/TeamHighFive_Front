import React from "react";
import Layout from "./layout/Layout";
import Hero from "./components/hero/Hero";
import Organizations from "./components/organizations/Organizations";
import "./App.css";

function App() {
  return (
    <Layout>
      <Hero />
      <Organizations />
    </Layout>
  );
}

export default App;
