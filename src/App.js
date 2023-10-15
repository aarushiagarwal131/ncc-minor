import React from "react";
import data from "./data.json";
import {
  Navbar,
  Footer,
  Hero,
  Enrollment,
  Blog,
  Bgs,
  Aim2,
  Achievements,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Bgs />
      <Hero />
      <Achievements />
      <Aim2 />
      <Blog testimonialData={data} />
      <Footer />
    </div>
  );
};

export default App;
