import React from "react";
import { Box } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutScreen from "../pages/AboutScreen";
import HomeScreen from "../pages/HomeScreen";
import ProjectScreen from "../pages/ProjectScreen";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#131313", color:"#E2E2E2" ,maxWidth: "100vw" }}>
        <Routes>
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default AppRoute;
