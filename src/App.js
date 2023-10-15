import React from "react";
import {
  Navbar,
  Home,
  Footer,
  Hero,
  Enrollment,
  Bgs,
  Achievements,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Bgs />
      <Hero />

      <Home />
      <Achievements />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default App;
