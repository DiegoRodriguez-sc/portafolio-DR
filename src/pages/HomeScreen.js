import React from "react";
import { Container, Link, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

  const navigate = useNavigate();

  const handleAbout = () => {navigate("/about")};
  const handleProjects = () => {navigate("/projects")};

  return (
    <Container
      maxWidth="sm"
      sx={{
        height:"100vh",
        backgroundColor:"#131313",
        color:"#E2E2E2",
        display: "flex",
        justifyContent: "center",
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
          <Link color={"#E2E2E2"} style={{ cursor: "pointer" }}>
            CV
          </Link>
        </Typography>
        <Box mt={2} />
        <Typography align="left" variant="h4">
          <ul style={{ listStyle: "none" }}>
            <li>
              <CircleIcon />
              <Link
                color={"#E2E2E2"}
                style={{ cursor: "pointer" }}
                onClick={handleAbout}
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <CircleIcon />
              <Link
                color={"#E2E2E2"}
                style={{ cursor: "pointer" }}
                onClick={handleProjects}
              >
                Projectos
              </Link>
            </li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeScreen;
