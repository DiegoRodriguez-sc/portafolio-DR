import React, { useState } from "react";
import { Box } from "@mui/system";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import HomeScreen from "../pages/HomeScreen";
import ProjectScreen from "../pages/ProjectScreen";
import NavBar from "../components/Navbar";
import GameScreen from "../pages/GameScreen";
import { AnimatePresence } from "framer-motion";

const AppRoute = () => {
  const location = useLocation();
  const tema = localStorage.getItem("theme") || "dark";
  const [changeTheme, setChangeTheme] = useState(tema);
  //light mode bgColor:"#E2E2E2", color:"#050038" , card :"#CCCCCC"
  //dark mode
  return (
    <Box
      sx={{
        backgroundColor: changeTheme === "dark" ? "#131313" : "#E2E2E2",
        color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
        maxWidth: "100vw",
      }}
    >
      <NavBar setChangeTheme={setChangeTheme} changeTheme={changeTheme} />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
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
      </AnimatePresence>
    </Box>
  );
};

export default AppRoute;
