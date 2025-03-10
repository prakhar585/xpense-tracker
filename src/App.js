import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";
import IncomeModal from './components/IncomeModal/IncomeModal'
import ExpenseModal from "./components/ExpenseModal/ExpenseModal";
import Transactions from "./components/Transactions/Transactions";




function App() {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses , setExpenses] = useState(0);
  const [expenseList , setExpenseList ] = useState([]);

  const [openIncomeModal, setOpenIncomeModal] = useState(false);
  const [openExpenseModal, setOpenExpenseModal] = useState(false);
  // add income modal

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenseList(savedExpenses);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenseList));
  }, [expenseList]);

  const handleOpenIncome =()=>{
    setOpenIncomeModal(true);
  }
  const handleCloseIncome =()=>{
    setOpenIncomeModal(false);
  }

  const handleOpenExpense=()=>{
    setOpenExpenseModal(true)
  }
  const handleCloseExpense=()=>{
    setOpenExpenseModal(false)
  }


  //method to update the wallet balance which is built by lifting state up from the modal
  const updateWalletBalance=(amount)=>{
    setWalletBalance((prevValue)=>prevValue+(Number(amount)));
  }

  const updateTransactionList =(data)=>{
    setExpenses((prev)=>prev+Number(data.price));
   
   setWalletBalance((prev) => prev - Number(data.price)); 
   setExpenseList((prevList) => [...prevList, data]);
  }




  return (
    <div className="App">
      <header>
        <h1 style={{ color: "white" }}>Expense Tracker</h1>
      </header>
      <section className="section">
        <Grid container spacing={2} sx={{ padding: "50px" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="expense-card">
              <h3>Wallet Balance : {walletBalance}</h3>
              <button onClick={handleOpenIncome}>+ Add Income</button>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="expense-card">
              <h3>Expenses: {expenses}</h3>
              <button onClick={handleOpenExpense}>+ Add Expenses</button>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>pi chart</Card>
          </Grid>
        </Grid>
      </section>
      <section className="section">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
           {expenseList.map((item, index)=>(<Transactions key={index} item={item}/>))}
            
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>Top Expenses</Card>
          </Grid>
        </Grid>
      </section>
      
      
      {/* Modal code */}
      <IncomeModal open={openIncomeModal} handleClose={handleCloseIncome} updateBalance={updateWalletBalance}/>

      <ExpenseModal open={openExpenseModal} handleClose={handleCloseExpense} updateExpense ={updateTransactionList}/>

    </div>




  );
}

export default App;

/*
Expense tracker, single page.

1.Homepage should load correctly with the title "Expense Tracker".
2.Wallet Balance and Expenses sections must be visible on the homepage.
3.Header must contain "Expense Tracker" and be visible at all times.
4."+ Add Income" button must be visible, enabled, and functional.
5.App must be responsive and display correctly on mobile screens.
6.Expense addition should include title, price, category, and date inputs.
7.Transactions must appear in the "Transactions" section after adding.
8.Wallet balance should update correctly after income or expense changes.
9.Different expense categories (Food, Travel, Entertainment) must work properly.
10.Transactions must persist in localStorage and reload correctly on refresh.







*/
