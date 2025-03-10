import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Snackbar, enqueueSnackbar } from "notistack";

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

function ExpenseModal({ open, handleClose, updateExpense }) {
  const [expenseData, setExpenseData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateExpense(expenseData);
    enqueueSnackbar("Expense Updated", {
      variant: "success",
      anchorOrigin: { vertical: "bottom", horizontal: "center" },
    });
    setExpenseData({ title: "", price: "", category: "", date: "" });

  
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
          <form onSubmit={handleSubmit}>
            <div>
              <input
                required
                type="text"
                placeholder="Title"
                name="title"
                value={expenseData.title}
                onChange={handleChange}
              />
              <input
                required
                type="number"
                placeholder="Price"
                name="price"
                value={expenseData.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                required
                name="category"
                value={expenseData.category}
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  Select category
                </option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <input
                required
                type="date"
                placeholder="Date"
                name="date"
                value={expenseData.date}
                onChange={handleChange}
              />
            </div>
            <div>
              <button type="submit">Add Expense</button>
              <button onClick={handleClose}>Cancel</button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ExpenseModal;
