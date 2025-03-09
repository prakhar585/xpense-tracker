import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

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

function ExpenseModal({ open, handleClose }) {
  const [expenseData, setExpenseData] = useState([
    { title: "", price: "", date: "" },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();

    setExpenseData({ ...expenseData });

    console.log(e.target.title.value);
    console.log(e.target.price.value);
    console.log(e.target.date.value);
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
              <input required type="text" placeholder="Title" name="title" />
              <input required type="number" placeholder="Price" name="price" />
            </div>
            <div>
              <select required name="catagory" defaultValue="">
                <option value="" disabled hidden>
                  Select category
                </option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="entertainment">Entertainment</option>
              </select>
              <input required type="date" placeholder="Date" name="date" />
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
