import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";
// import Sun from "../..img/sun.png"
import Sun from "../../img/sun.svg";
import Moon from "../../img/moon.svg";

// {Sun}
// {Moon}
const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <img src={Sun} alt="" className="toggle-icon" />
      <img src={Moon} alt="" className="toggle-icon" />
      <div
        className="toggle-button"
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
