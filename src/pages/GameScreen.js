import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import GenNum from "../components/game/GenNum";
import InputNum from "../components/game/InputNum";
import Instructions from "../components/game/Instructions";

const GameScreen = ({ changeTheme }) => {
  const [openI, setopenI] = useState(true);
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  const randomGenerate = (digit) => {
    let max = Math.pow(10, digit) - 1,
      min = Math.pow(10, digit - 1);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [stateGame, setStateGame] = useState({
    question: randomGenerate(2),
    level: { main: 1, sub: 1 },
    wrong: 0,
  });

  const resetState = () => {
    setStateGame({
      question: randomGenerate(2),
      level: { main: 1, sub: 1 },
      wrong: 0,
    });
  };

  const compareUserInput = (userNumber) => {
    let currQuestion = stateGame.question,
      mainLevel = stateGame.level.main,
      subLevel = stateGame.level.sub,
      wrong = stateGame.wrong,
      digit;

    if (userNumber === currQuestion) {
      if (subLevel < 3) {
        ++subLevel;
      } else if (subLevel === 3) {
        ++mainLevel;
        subLevel = 1;
      }
    } else {
      ++wrong;
    }
    digit = mainLevel + 2;

    setStateGame({
      question: randomGenerate(digit),
      level: { main: mainLevel, sub: subLevel },
      wrong: wrong,
    });
  };

  const handleClose = () => {
    setopenI(!openI);
    resetState();
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"} textAlign="center">
        <Instructions
          open={openI}
          handleClose={handleClose}
          changeTheme={changeTheme}
        />
        <Box width={"100%"} textAlign="start" mt={10}>
          <Link
            color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
            style={{ cursor: "pointer", fontSize: "2rem"}}
            onClick={handleBack}
          >
            back
          </Link>
        </Box>
        <VideogameAssetIcon sx={{ fontSize: "250px" }} />
        <Typography variant="h2">
          Memory Game
        </Typography>
        <Box mb={3}/>
        <Box>
          <GenNum
            question={stateGame.question}
            level={stateGame.level}
            wrong={stateGame.wrong}
            changeTheme={changeTheme}
          />
          <Box mt={2}/>
          <InputNum
            compareUserInput={compareUserInput}
            wrong={stateGame.wrong}
            onReset={resetState}
            changeTheme={changeTheme}
          />
          <Box mt={2}/>
        </Box>
      </Box>
    </Container>
  );
};

export default GameScreen;
