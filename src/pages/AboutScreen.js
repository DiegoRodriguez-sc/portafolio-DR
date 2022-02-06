import { Container, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import photo from "../assets/photo.jpg";
import gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import cv from "../assets/cv.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutScreen = ({ changeTheme }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"}>
        <Box mb={10} />
        <Link
          color={changeTheme ? "#E2E2E2" : "#050038"}
          style={{ cursor: "pointer", fontSize: "2rem" }}
          onClick={handleBack}
        >
          back
        </Link>
        <Box mb={5} />
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Quien Soy?
        </Typography>
        <Box mb={2} />
        <Box
          component="img"
          loading="lazy"
          sx={{ width: "100%" }}
          alt={"foto de perfil"}
          src={photo}
        />
        <Box mb={2} />
        <Typography paragraph={true} variant="h4">
          Mi nombre es Diego Rodriguez, soy desarrollador web y estudiante de
          Lic. en Sistemas en{" "}
          <Link
            color={changeTheme ? "#E2E2E2" : "#050038"}
            style={{ cursor: "pointer", fontSize: "2rem" }}
            href="https://www.info.unlp.edu.ar/"
            target={"_blank"}
          >
            La Universidad Nacional de la Plata.
          </Link>{" "}
          <br />
          <br />
          Realmente disfruto resolviendo problemas y haciendo que las cosas sean
          agradables y fáciles de usar. No puedo dejar de aprender cosas
          nuevas!, cuanto más mejor.
          <br />
          <br />
          También me encantan los videojuegos. Una afición que me llevó a
          conocer y competir con buena gente. Ah, y dulce de leche ¡Tengo una
          pasión por el dulce de leche!
        </Typography>
        <Typography variant="h3">Que Hago?</Typography>
        <Box mb={2} />
        <Typography paragraph={true} variant="h4">
          <strong>Soy programador</strong>, Para el front-end, suelo trabajar
          con Javascript, ya sea de forma independiente o incluyendo marcos
          populares como ReactJS, ReactNative(aprendiendo).
          <br />
          <br />
          También embellezco la web usando Sass, CSS y, cuando sea necesario,
          cualquiera de sus amigos: Bootstrap, Material-UI, etc.
          <br />
          <br />
          Para el back-end también trabajo con Javascript (NodeJS, Express),
          pero últimamente estoy aprendiendo java con Spring Boot. En base de
          datos utilizo mongoDB y mySQL .
        </Typography>
        <Typography variant="h3">Contacto</Typography>
        <Box mb={2} />
        <Paper
          sx={{
            height: 90,
            bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
            color: changeTheme ? "#E2E2E2" : "#050038",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              marginLeft={2}
              component="img"
              sx={{ width: "60px" }}
              alt={"logo github"}
              src={github}
            />
            <Link
              color={changeTheme ? "#E2E2E2" : "#050038"}
              style={{ cursor: "pointer" }}
              href={"https://github.com/DiegoRodriguez-sc"}
              target="_blank"
            >
              <Typography
                sx={{
                  lineHeight: 5.5,
                  textTransform: "uppercase",
                  fontSize: "2vh",
                  marginLeft: 0.5,
                }}
              >
                DiegoRodriguez-sc
              </Typography>
            </Link>
          </Box>
        </Paper>
        <Box mb={2} />
        <Paper
          sx={{
            height: 90,
            bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
            color: changeTheme ? "#E2E2E2" : "#050038",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              marginLeft={2}
              component="img"
              sx={{ width: "60px" }}
              alt={"logo linkedin"}
              src={linkedin}
            />
            <Link
              color={changeTheme ? "#E2E2E2" : "#050038"}
              style={{ cursor: "pointer" }}
              href={"https://www.linkedin.com/in/diego-rodriguez-sc/"}
              target="_blank"
            >
              <Typography
                sx={{
                  lineHeight: 5.5,
                  textTransform: "uppercase",
                  fontSize: "2vh",
                  marginLeft: 0.5,
                }}
              >
                Diego-Rodriguez-sc
              </Typography>
            </Link>
          </Box>
        </Paper>
        <Box mb={2} />
        <Paper
          sx={{
            height: 90,
            bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
            color: changeTheme ? "#E2E2E2" : "#050038",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              marginLeft={2}
              component="img"
              sx={{ width: "60px" }}
              alt={"logo cv"}
              src={cv}
            />
            <Link
              color={changeTheme ? "#E2E2E2" : "#050038"}
              style={{ cursor: "pointer" }}
              href={
                "https://drive.google.com/drive/folders/1NuQnVkpBzT41MCxk9Uwfe_1LcBKLEx-1?usp=sharing"
              }
              target="_blank"
            >
              <Typography
                sx={{
                  lineHeight: 5.5,
                  textTransform: "uppercase",
                  fontSize: "2vh",
                  marginLeft: 0.5,
                }}
              >
                Diego Rodriguez
              </Typography>
            </Link>
          </Box>
        </Paper>
        <Box mb={2} />
        <Paper
          sx={{
            height: 90,
            bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
            color: changeTheme ? "#E2E2E2" : "#050038",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box
              marginLeft={2}
              component="img"
              sx={{ width: "60px" }}
              alt={"logo email"}
              src={gmail}
            />
            <Link
              color={changeTheme ? "#E2E2E2" : "#050038"}
              style={{ cursor: "pointer" }}
              href={"mailto:diego.rodriguez.sc@gmail.com"}
              target="_blank"
            >
              <Typography
                sx={{
                  lineHeight: 5.5,
                  textTransform: "uppercase",
                  fontSize: "2vh",
                  marginLeft: 0.5,
                }}
              >
                Diego.Rodriguez.sc@gmail.com
              </Typography>
            </Link>
          </Box>
        </Paper>
        <Box mb={2} />
      </Box>
    </Container>
  );
};

export default AboutScreen;
