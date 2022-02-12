import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
// changeTheme === "dark" ? "#E2E2E2" : "#050038" color
// changeTheme === "dark" ? "#1C1C1C" : "#CCCCCC"  bg,
const Instructions = ({ handleClose, open, changeTheme }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: changeTheme === "dark" ? "#1C1C1C" : "#CCCCCC",
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
        fontSize={25}
      >
        {"Juego de memoria para cerebritos"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          fontSize={20}
          color={changeTheme === "dark" ? "#E2E2E2" : "#050038"}
        >
          Necesitas recordar el número que aparecerá entre las barras y así seguir avanzando de nivel, fácil verdad?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{color:changeTheme === "dark" ? "#E2E2E2" : "#050038"}} onClick={handleClose} autoFocus>
          Entendido mi capitan!
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Instructions;
