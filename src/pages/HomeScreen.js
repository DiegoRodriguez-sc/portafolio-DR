import React from "react";
import { Container, Link, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { Box } from "@mui/system";

const HomeScreen = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box >
        <Typography align="left" variant="h1" sx={{ fontWeight: "bold", fontSize: "7rem" }}>
          Hola, soy Diego
        </Typography>
        <Box mt={2}  />
        <Typography align="left" variant="h3">
          Desarrollador web <Link color={"#E2E2E2"} style={{cursor:"pointer"}}>CV</Link>
        </Typography>
        <Box mt={2} />
        <Typography align="left" variant="h3">
          <ul style={{listStyle:"none"}}>
            <li><CircleIcon /><Link color={"#E2E2E2"} style={{cursor:"pointer"}} >Sobre mi</Link></li>
            <li><CircleIcon /><Link color={"#E2E2E2"} style={{cursor:"pointer"}} >Projectos</Link></li>
          </ul>
        </Typography>
      </Box>
    </Container>
  );
};

export default HomeScreen;
