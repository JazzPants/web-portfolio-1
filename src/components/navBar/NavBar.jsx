import * as React from "react";
// import "./navBar.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "../../svg/homeIcon";
import AboutMeIcon from "../../svg/aboutMeIcon";
import LinkedInIcon from "../../svg/linkedInIcon";

import { useContext } from "react";
import { ThemeContext } from "../../context";
// import Toggle from "./components/Toggle/Toggle";
import Toggle from "../Toggle/Toggle";
//TODO: make Menu Drawer appear UNDER the NavBar
// const styles = (theme) => ({
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//   },
// });

//TODO: exit/retract drawer on link click
//onClick={toggleDrawer("left", false)}

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, ["left"]: open });
  };

  const handleScrollToIntro = () => {
    // const anchor = document.querySelector("#introduction-background");
    // anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToTechSkills = () => {
    const anchor = document.querySelector("#techskills");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToAbout = () => {
    const anchor = document.querySelector("#about");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToProjects = () => {
    const anchor = document.querySelector("#project-list");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleScrollToContact = () => {
    const anchor = document.querySelector("#contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    // toggleDrawer("left", false);
  };

  // const handleContact = () => {
  //   toggleDrawer("left", false);
  // handleScrollToContact();
  // };

  // const list = ("left") => (
  //   <Box
  //     sx={{ width: "left" === "top" || "left" === "bottom" ? "auto" : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer("left", false)}
  //     onKeyDown={toggleDrawer("left", false)}
  //   >
  //     <List>
  //       {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {["All mail", "Trash", "Spam"].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#00968e80", color: "white" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Toggle />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        PaperProps={{ style: { width: 200 } }}
      >
        <Divider />
        {/* {["All mail", "Trash", "Spam"].map((text, index) => (
          <Box onClick={`scrollTo${text}`} key={index}>
            {text}
          </Box>
        ))} */}

        <Box onClick={handleScrollToIntro}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon fill={darkMode ? "white" : "rgb(0, 150, 142)"} />
                  </ListItemIcon>
                  <ListItemText>Intro</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider />

        {/* <Box onClick={handleScrollToTechSkills}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>icon</ListItemIcon>
                  <ListItemText>Tech Skills</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider /> */}

        <Box onClick={handleScrollToAbout}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AboutMeIcon />
                  </ListItemIcon>
                  <ListItemText>About</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider />

        <Box onClick={handleScrollToProjects}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>icon</ListItemIcon>
                  <ListItemText>Projects</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider />

        <Box onClick={handleScrollToContact}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>icon</ListItemIcon>
                  <ListItemText>Contact</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider />
      </Drawer>
    </div>
  );
}
