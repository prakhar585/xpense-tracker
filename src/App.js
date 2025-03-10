// import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import IncomeModal from "./components/IncomeModal/IncomeModal";
import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
import Transactions from "./components/Transactions/Transactions";
import PiChart from "./components/PiChart/PiChart";
import { WidthFull } from "@mui/icons-material";
import BarGraph from "./components/BarGraph/BarGraph";

function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenseList(savedExpenses);

    // Calculate total expenses from saved data
    if (savedExpenses.length > 0) {
      const totalExpense = savedExpenses.reduce(
        (sum, expense) => sum + Number(expense.price),
        0
      );
      setExpenses(totalExpense);
      setWalletBalance((prev) => 5000 - totalExpense); // Assuming initial balance is 5000
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  }, [expenseList]);

  const handleOpenIncome = () => {
    setOpenIncomeModal(true);
  };

  const handleCloseIncome = () => {
    setOpenIncomeModal(false);
  };

  const handleOpenExpense = () => {
    setOpenExpenseModal(true);
  };

  const handleCloseExpense = () => {
    setOpenExpenseModal(false);
  };

  //method to update the wallet balance which is built by lifting state up from the modal
  const updateWalletBalance = (amount) => {
    setWalletBalance((prevValue) => prevValue + Number(amount));
  };

  const updateTransactionList = (data) => {
    setExpenses((prev) => prev + Number(data.price));
    setWalletBalance((prev) => prev - Number(data.price));
    setExpenseList((prevList) => [...prevList, data]);
  };

  return (
    <div className="App">
      <header>
        <h1 style={{ color: "white" }}>Expense Tracker</h1>
      </header>
      <section className="section">
        <Grid container spacing={2} sx={{ padding: "50px" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="expense-card">
              <h3>Wallet Balance: {walletBalance}</h3>
              <button onClick={handleOpenIncome}>+ Add Income</button>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="expense-card">
              <h3>Expenses: {expenses}</h3>
              <button onClick={handleOpenExpense}>+ Add Expense</button>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ width: "100%", maxWidth: 300, overflow: "hidden" }}>
              <PiChart data={expenseList} />
            </Box>
          </Grid>
        </Grid>
      </section>
      <section className="section">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <h2>Transactions</h2>
            {expenseList.map((item, index) => (
              <Transactions key={index} item={item} />
            ))}
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Card><BarGraph data={expenseList}/></Card>
          </Grid>
        </Grid>
      </section>

      {/* Modal code */}
      <IncomeModal
        open={openIncomeModal}
        handleClose={handleCloseIncome}
        updateBalance={updateWalletBalance}
      />
      <ExpenseModal
        open={openExpenseModal}
        handleClose={handleCloseExpense}
        updateExpense={updateTransactionList}
      />
    </div>
  );
}

export default App;
