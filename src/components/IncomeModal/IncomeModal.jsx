import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { enqueueSnackbar, SnackbarProvider, useSnackbar } from "notistack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//create a ref to auto focus and to clear after the onClick
export default function BasicModal({ open, handleClose, updateBalance }) {
  const [balance, setBalance] = useState("");

  const handleBalance = (e) => {
    e.preventDefault();
    if (!balance || isNaN(balance) || balance <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    updateBalance(balance);
    enqueueSnackbar("Wallet Balance Updated",{variant: 'success', anchorOrigin: { vertical: "bottom", horizontal: "center" },});
    setBalance("");
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4>Add Balance</h4>
          <form onSubmit={handleBalance}>
            <input
              placeholder="Income Amount"
              type="number"
              onChange={(e) => setBalance(e.target.value)}
            ></input>
            <button type="submit">Add Balance</button>
          </form>
          <button onClick={handleClose}>Cancel</button>
        </Box>
      </Modal>
    </div>
  );
}
