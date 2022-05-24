import "./App.css";

import React from "react";
import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/Toggle/Toggle";

const App = () => {
  return (
    <div>
      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div>
  );
};

export default App;
