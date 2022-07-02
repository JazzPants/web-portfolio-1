import "./App.css";

import Intro from "./components/introduction/Intro";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import TechSkills from "./components/techSkills/TechSkills";
import { Button } from "@mui/material";
import NavBar from "./components/navBar/NavBar";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "rgb(0, 35, 51)" : "white",
        color: darkMode && "white",
      }}
    >
      <NavBar></NavBar>

      <Toggle></Toggle>
      <Intro></Intro>
      <TechSkills></TechSkills>
      <About></About>
      <ProjectList></ProjectList>
      <Contact></Contact>
    </div>
  );
};

export default App;
