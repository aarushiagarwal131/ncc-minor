import React from "react";
import { Navbar, Home, Footer, Hero, Enrollment } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
