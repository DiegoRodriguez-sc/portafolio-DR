import React, { useState } from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import HomeScreen from "../pages/HomeScreen";
import ProjectScreen from "../pages/ProjectScreen";
import NavBar from "../components/Navbar";
import GameScreen from "../pages/GameScreen";

const AppRoute = () => {
  const [changeTheme, setChangeTheme] = useState(true);
  //light mode bgColor:"#E2E2E2", color:"#050038" , card :"#CCCCCC"
  //dark mode
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: changeTheme ? "#131313" : "#E2E2E2",
          color: changeTheme ? "#E2E2E2" : "#050038",
          maxWidth: "100vw",
        }}
      >
        <NavBar setChangeTheme={setChangeTheme} />
        <Routes>
          <Route
            path="/about"
            element={<AboutScreen changeTheme={changeTheme} />}
          />
          <Route
            path="/projects"
            element={<ProjectScreen changeTheme={changeTheme} />}
          />
          <Route
            path="/game"
            element={<GameScreen changeTheme={changeTheme} />}
          />
          <Route path="/" element={<HomeScreen changeTheme={changeTheme} />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default AppRoute;
