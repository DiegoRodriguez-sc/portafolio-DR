import React, { useState } from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GenNum from "../components/game/GenNum";

const GameScreen = ({changeTheme}) => {
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
      } else if (subLevel == 3) {
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

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "95vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box width={"100%"} textAlign="center">
        <VideogameAssetIcon  sx={{fontSize:"250px"}} />
        <Box>
          <GenNum
            question={stateGame.question}
            level={stateGame.level}
            wrong={stateGame.wrong}
												changeTheme={changeTheme}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default GameScreen;
