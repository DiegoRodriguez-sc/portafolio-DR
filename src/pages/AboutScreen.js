import { Container, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import photo from "../assets/photo.jpg";
import gmail from "../assets/gmail.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import web from "../assets/web.svg";
import React from "react";
import { useNavigate } from "react-router-dom";

const AboutScreen = () => {
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
          color={"#E2E2E2"}
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
          sx={{ width: "100%" }}
          alt={"foto de perfil"}
          src={photo}
        />
        <Box mb={2} />
        <Typography paragraph={true} variant="h4">
          Mi nombre es Diego Rodriguez,soy estudiante universitario en
          Universidad Nacional de la Plata. Realmente disfruto resolviendo
          problemas y haciendo que las cosas sean agradables y fáciles de usar.
          No puedo dejar de aprender cosas nuevas, cuanto más mejor. También me
          encantan los videojuegos. Una afición que me llevó a conocer y
          competir con buena gente. Ah, y dulce de leche ¡Tengo una pasión por
          el dulce de leche!
        </Typography>
        <Typography variant="h3">Que Hago?</Typography>
        <Box mb={2} />
        <Typography paragraph={true} variant="h4">
          Para el front-end, suelo trabajar con Javascript, ya sea de forma
          independiente o incluyendo marcos populares como
          ReactJS,ReactNative(aprendiendo). También embellezco la web usando
          Sass, CSS y, cuando sea necesario, cualquiera de sus amigos:
          Bootstrap, Material-UI, etc. Para el back-end también trabajo con
          Javascript (NodeJS, Express, MongoDB, etc.). Pero últimamente estoy
          aprendiendo java con Spring Boot.
        </Typography>
        <Typography variant="h3">Contacto</Typography>
         <Box mb={2} />
         <Paper sx={{height:90, bgcolor:"#1C1C1C", color:"#E2E2E2", display:"flex", justifyContent:"flex-start"}}>
         <Box sx={{display:"flex"}}>
         <Box
          marginLeft={2}
          component="img"
          sx={{ width: "60px" }}
          alt={"logo email"}
          src={github}
        />
          <Typography sx={{lineHeight:5.5, textTransform:"uppercase", fontSize:"2vh",marginLeft:.5}}>
            DiegoRodriguez-sc
          </Typography>
         </Box>
         </Paper>
         <Box mb={2} />
         <Paper sx={{height:90, bgcolor:"#1C1C1C", color:"#E2E2E2", display:"flex", justifyContent:"flex-start"}}>
         <Box sx={{display:"flex"}}>
         <Box
          marginLeft={2}
          component="img"
          sx={{ width: "60px" }}
          alt={"logo email"}
          src={linkedin}
        />
          <Typography sx={{lineHeight:5.5, textTransform:"uppercase", fontSize:"2vh",marginLeft:.5}}>
            Diego-Rodriguez-sc
          </Typography>
         </Box>
         </Paper>
         <Box mb={2} />
         <Paper sx={{height:90, bgcolor:"#1C1C1C", color:"#E2E2E2", display:"flex", justifyContent:"flex-start"}}>
         <Box sx={{display:"flex"}}>
         <Box
          marginLeft={2}
          component="img"
          sx={{ width: "60px" }}
          alt={"logo email"}
          src={web}
        />
          <Typography sx={{lineHeight:5.5, textTransform:"uppercase", fontSize:"2vh",marginLeft:.5}}>
            Diego Rodriguez
          </Typography>
         </Box>
         </Paper>
         <Box mb={2} />
         <Paper sx={{height:90, bgcolor:"#1C1C1C", color:"#E2E2E2", display:"flex", justifyContent:"flex-start"}}>
         <Box sx={{display:"flex"}}>
         <Box
          marginLeft={2}
          component="img"
          sx={{ width: "60px" }}
          alt={"logo email"}
          src={gmail}
        />
          <Typography sx={{lineHeight:5.5, textTransform:"uppercase", fontSize:"2vh",marginLeft:.5}}>
            Diego.Rodriguez.sc@gmail.com
          </Typography>
         </Box>
         </Paper>
         <Box mb={2} />
      </Box>
    </Container>
  );
};

export default AboutScreen;
