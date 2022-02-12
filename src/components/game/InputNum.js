import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

const InputNum = ({ compareUserInput, wrong, onReset, changeTheme }) => {
  const [inputValue, setInputValue] = useState({
    valueNumber: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    const newValues = {
      ...inputValue,
      [name]: value,
    };
    setInputValue(newValues);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    let number = parseInt(inputValue.valueNumber,10);
    compareUserInput(number);
    setInputValue({
     valueNumber: "",
   })
  };
  const handleReset = () => {
    onReset();
  };
  return (
    <Box >
      <form onSubmit={handleUserInput}>
        <Typography variant="h4">El numero es:</Typography>
        {wrong < 3 ? (
          <input
            type="number"
            required
            name="valueNumber"
            value={inputValue.valueNumber}
            min={0}
            onChange={handleChange}
            style={{
              outline: "none",
              width: "100%",
              border: "none",
              marginTop: "5px",
              padding: "10px 0px 0px 0px",
              background: "transparent",
              textAlign: "center",
              color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
              fontSize: "30px",
              borderBottom: `3px dotted ${changeTheme === "dark" ? "#E2E2E2" : "#050038"}`,
            }}
          />
        ) : (
          <Typography mt={2} variant="h4">
            mejor suerte la proxima
          </Typography>
        )}
      </form>
      <Box mt={3} />
      <Button
        variant="text"
        fullWidth
        sx={{
          color: changeTheme === "dark" ? "#E2E2E2" : "#050038",
          fontSize: "20px",
          backgroundColor: changeTheme === "dark" ? "#1C1C1C" : "#CCCCCC",
        }}
        onClick={handleReset}
      >
        RESET
      </Button>
    </Box>
  );
};

export default InputNum;
