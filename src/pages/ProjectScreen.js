import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Link,
  Typography,
} from "@mui/material";
import { data } from "../helpers/data";
import { motion } from "framer-motion";


const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.2 } },
  exit: { opacity: 0, x: -100 },
};

const ProjectScreen = ({ changeTheme }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Container
      maxWidth="sm"
      component={motion.div}
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: .5 }}
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"}>
        <Box mb={10} />
        <Link
          color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
          style={{ cursor: "pointer", fontSize: "2rem" }}
          onClick={handleBack}
        >
          back
        </Link>
        <Box mb={5} />
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          Mis proyectos
        </Typography>
        <Box mb={2} />
        <Typography variant="h4">
          Estos son algunas apps que construí a medida que aprendía en la universidad y desarrollo web..
        </Typography>
        <Box mb={3} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "center",
          }}
        >
          {data.map((pr) => (
            <Card
              key={pr.title}
              sx={{
                width: { xs: 345, md: 267 },
                bgcolor: changeTheme === "dark" ? "#1C1C1C" : "#CCCCCC",
                color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <CardMedia
                  component="img"
                  height="140"
                  image={pr.img}
                  alt={pr.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
                  >
                    {pr.title}
                  </Typography>
                  <Typography variant="body2">{pr.small}</Typography>
                  <Box mb={1} />
                  <Typography
                    variant="h5"
                    color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
                  >
                    {pr.p}
                  </Typography>
                </CardContent>
              </div>
              <CardActions>
                <Button
                  sx={{
                    bgcolor: changeTheme === "dark" ? "#242424" : "#BABABA",
                    color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
                  }}
                  size="medium"
                  onClick={() => window.open(pr.repo, "__blank")}
                >
                  Repo
                </Button>
                {pr.link && (
                  <Button
                    sx={{
                      bgcolor: changeTheme === "dark" ? "#242424" : "#BABABA",
                      color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
                    }}
                    size="medium"
                    onClick={() => window.open(pr.link, "__blank")}
                  >
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
        <Box mb={3} />
      </Box>
    </Container>
  );
};

export default ProjectScreen;
