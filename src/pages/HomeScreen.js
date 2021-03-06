import React from "react";
import { Container, Link, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import curriculum from "../assets/pdf/Diego-Rodriguez.pdf";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.2 } },
  exit: { opacity: 0, x: -100 },
};

const HomeScreen = ({ changeTheme }) => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  const handleProjects = () => {
    navigate("/projects");
  };
  const handleGame = () => {
    navigate("/game");
  };

  return (
    <Container
      component={motion.div}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .5 }}
      maxWidth="sm"
      sx={{
        height: "95vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          align="left"
          variant="h1"
          sx={{ fontWeight: "bold", fontSize: "6.5em" }}
        >
          Hola, soy Diego
        </Typography>
        <Box mt={2} />
        <Typography align="left" variant="h4">
          Desarrollador web{" "}
          <Link
            href={curriculum}
            target={"_blank"}
            color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
            style={{ cursor: "pointer" }}
          >
            CV
          </Link>
        </Typography>
        <Box mt={2} />
        <Typography align="left" variant="h4">
          <ul style={{ listStyle: "none" }}>
            <li>
              <CircleIcon />
              <Link
                color={changeTheme  === "dark" ? "#E2E2E2" : "#050038"}
                style={{ cursor: "pointer" }}
                onClick={handleAbout}
              >
                Sobre mi
              </Link>
            </li>
            <Box mt={.5} />
            <li>
              <CircleIcon />
              <Link
                color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
                style={{ cursor: "pointer" }}
                onClick={handleProjects}
              >
                Proyectos
              </Link>
            </li>
            <Box mt={.5} />
            <li>
              <CircleIcon />
              <Link
                color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
                style={{ cursor: "pointer" }}
                onClick={handleGame}
              >
                Game
              </Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeScreen;
