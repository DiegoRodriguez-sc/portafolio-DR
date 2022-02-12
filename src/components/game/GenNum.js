import React, { useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

const GenNum = ({ question, level, wrong, changeTheme }) => {

  let number = document.getElementById("number");
  setTimeout(function () {
    number.innerHTML = number.innerHTML.replace(/\w/gi, "*");
  }, 1200);

  useEffect(() => {
    let number = document.getElementById("number");
    setTimeout(function () {
      number.innerHTML = number.innerHTML.replace(/\w|\W/gi, "*");
    }, 1200);
  }, []);

  return (
    <Box>
      <Paper
        sx={{
          height: 50,
          bgcolor: changeTheme === "dark" ? "#1C1C1C" : "#CCCCCC",
          color: changeTheme  === "dark" ? "#E2E2E2" : "#050038",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          Level: {level.main} - {level.sub}
        </Typography>
        <Typography variant="h4" color="error">
          Wrong: {wrong}/3
        </Typography>
      </Paper>
      <Box mt={2} />
      <Divider sx={{bgcolor: changeTheme === "dark" ? "#E2E2E2" : "#050038", height:"6px"}} />
      <Typography mt={2} mb={2} align="center" variant="h2" id="number">
        {wrong < 3 ? question : "????"}
      </Typography>
      <Divider sx={{bgcolor: changeTheme === "dark" ? "#E2E2E2" : "#050038", height:"6px"}} />
    </Box>
  );
};

export default GenNum;
