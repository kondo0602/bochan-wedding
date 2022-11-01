import * as React from "react";
import AppBar from "@mui/material/AppBar";
import LaptopChromebookSharpIcon from "@mui/icons-material/LaptopChromebookSharp";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <LaptopChromebookSharpIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          React Training Lab
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
