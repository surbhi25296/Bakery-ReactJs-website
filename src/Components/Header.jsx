import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "../../src/styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //MENU DRAWER
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",color:'black' }}>
      <img src="https://cdn.pixabay.com/photo/2022/03/02/02/48/birthday-7042328_640.png" alt="" width={'50px'}/>
      <Typography
        color="#bea064"
        variant="h4"
        component={"div"}
        sx={{ flexGrow: 1, fontWeight: 'bold',my:2 ,fontFamily:'cursive' }}
      >
       
       SprinkleJoy.
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#fff" }}>
          <Toolbar>
            <IconButton
              color="#bea064"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" }}}
              onClick={handleDrawerToggle}
            >
              <MenuIcon/>
            </IconButton>
            <img src="https://cdn.pixabay.com/photo/2022/03/02/02/48/birthday-7042328_640.png" alt="" width={'60px'}/>
            <Typography
              color="#bea064"
              variant="h4"
              component={"div"}
              sx={{ flexGrow: 1, fontWeight:'bold',fontFamily:'cursive'}}
            >
              
              SprinkleJoy.
              
            </Typography>
            
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/products"}>Products</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" },"& .MuiDrawer-paper":{
              boxSizing:'border-box',
              width:'240px',
            } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
        
      </Box>
    </>
  );
};

export default Header;
