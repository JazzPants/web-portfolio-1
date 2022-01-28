import "./App.css";

import React from "react";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";

const App = () => {
  return (
    <div>
      <Intro></Intro>
      <About></About>
    </div>
  );
};

export default App;
