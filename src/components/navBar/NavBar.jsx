import * as React from "react";
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, ["left"]: open });
  };

  const handleScrollToIntro = () => {};

  const handleScrollToTechSkills = () => {};

  const handleScrollToAbout = () => {};

  const handleScrollToProjects = () => {};

  const handleScrollToContact = () => {
    const anchor = document.querySelector("#contact");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    toggleDrawer("left", false);
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
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>
          <Button color="inherit">Login</Button>
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
                  <ListItemIcon>icon</ListItemIcon>
                  <ListItemText>Intro</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </div>
        </Box>
        <Divider />

        <Box onClick={handleScrollToTechSkills}>
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
        <Divider />

        <Box onClick={handleScrollToAbout}>
          <div>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>icon</ListItemIcon>
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
