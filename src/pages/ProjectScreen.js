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

const ProjectScreen = ({ changeTheme }) => {
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
          Mis proyectos
        </Typography>
        <Box mb={2} />
        <Typography variant="h4">Estos son algunos de mis proyectos..</Typography>
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
                bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
                color: changeTheme ? "#E2E2E2" : "#050038",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between"
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
                  color={changeTheme ? "#E2E2E2" : "#050038"}
                >
                  {pr.title}
                </Typography>
                <Typography variant="body2"> 
                   {pr.small}
                </Typography>
                <Box mb={1} />
                <Typography
                  variant="h5"
                  color={changeTheme ? "#E2E2E2" : "#050038"}
                >
                  {pr.p}
                </Typography>
              </CardContent>
            </div>
              <CardActions>
                <Button
                  sx={{
                    bgcolor: changeTheme ? "#242424" : "#BABABA",
                    color: changeTheme ? "#E2E2E2" : "#050038",
                  }}
                  size="medium"
                >
                  Repo
                </Button>
                {pr.link && <Button
                  sx={{
                    bgcolor: changeTheme ? "#242424" : "#BABABA",
                    color: changeTheme ? "#E2E2E2" : "#050038",
                  }}
                  size="medium"
                >
                  Demo
                </Button>}
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
