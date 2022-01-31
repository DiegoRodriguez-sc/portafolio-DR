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

const ProjectScreen = () => {
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
          Mis projectos
        </Typography>
        <Box mb={2} />
        <Typography>Estos son mis projectos.....</Typography>
        <Box mb={2} />
        <Box sx={{display:"flex", flexWrap:"wrap", gap:2, justifyContent:"center"}}>
          {data.map((pr) => (
            <Card key={pr.title} sx={{ width:{xs:345, md:265}, bgcolor:"#1C1C1C", color:"#E2E2E2"}}>
              <CardMedia
                component="img"
                height="140"
                image={pr.img}
                alt={pr.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div" color={"#E2E2E2"}>
                  {pr.title}
                </Typography>
                <Typography variant="h5" color={"#E2E2E2"}>
                  {pr.p}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="medium">Repo</Button>
                <Button size="medium">Demo</Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectScreen;
