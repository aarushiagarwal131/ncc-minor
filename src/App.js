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
  Photo_gallery,
  Tabs,
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
      <Tabs />
      <Photo_gallery />
      <Blog testimonialData={data} />
      <Footer />
    </div>
  );
};

export default App;
