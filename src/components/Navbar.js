import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Box, Container, Typography } from "@mui/material";

const NavBar = ({ setChangeTheme, changeTheme }) => {
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
    if (changeTheme === "dark") {
      setChangeTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setChangeTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <Container maxWidth="sm" sx={{ pt: 3 }}>
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h5">{time}</Typography>

        <Box component="div" sx={{ cursor: "pointer" }} onClick={handleTheme}>
          {changeTheme === "dark" ? (
            <WbSunnyIcon style={{ fontSize: 25 }} />
          ) : (
            <DarkModeIcon style={{ fontSize: 25 }} />
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default NavBar;
