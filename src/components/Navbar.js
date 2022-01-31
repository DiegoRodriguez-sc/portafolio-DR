import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Box, Container, Typography } from "@mui/material";

const NavBar = () => {
  const [theme, setTheme] = useState(true);
  const mydate = new Date(),
    day = mydate.getDay();

  const dayArray = [
    "DOMINGO,",
    "LUNES,",
    "MARTES,",
    "MIERCOLES,",
    "JUEVES,",
    "VIERNES,",
    "SABADO,",
  ];

  let time = dayArray[day] + " " + mydate.toLocaleTimeString().slice(0, -3);

  const handleTheme = () => {
     setTheme(!theme);
  }
  return (
    <Container maxWidth="sm" sx={{ pt: 3 }}>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5">{time}</Typography>

        <Box component="div" sx={{ cursor: "pointer" }} onClick={handleTheme}>
           {
            theme 
              ? (<WbSunnyIcon style={{ fontSize: 25 }} />)
              : (<DarkModeIcon style={{ fontSize: 25 }} />)
           }
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
