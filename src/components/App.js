import React from "react";
import About from "./About"; // Adjust path based on the location of About.js
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;

