import React, { useEffect } from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";

const GenNum = ({ question, level, wrong, changeTheme }) => {
  let time, digit;

  digit = level + 2;
  time = 100 * Math.min(digit, 5) + 400 * Math.max(digit - 5, 0);

  let number = document.getElementById("number");
  setTimeout(function () {
    number.innerHTML = number.innerHTML.replace(/\w/gi, "*");
  }, time);

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
          bgcolor: changeTheme ? "#1C1C1C" : "#CCCCCC",
          color: changeTheme ? "#E2E2E2" : "#050038",
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
      <Divider sx={{bgcolor: changeTheme ? "#E2E2E2" : "#050038", height:"6px"}} />
      <Typography mt={2} mb={2} align="center" variant="h2" id="number">
        {wrong < 3 ? question : "????"}
      </Typography>
      <Divider sx={{bgcolor: changeTheme ? "#E2E2E2" : "#050038", height:"6px"}} />
    </Box>
  );
};

export default GenNum;
