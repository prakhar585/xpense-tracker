import React from "react";
import "./App.css";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid2";

function App() {
  return (
    <div className="App">
      <header>
        <h1 style={{ color: "white" }}>Expense Tracker</h1>
      </header>
      <section className="section">
        <Grid container spacing={2} sx={{padding:'50px'}}>
          <Grid size={{ xs: 12, md: 4 }} >
            <Card className="expense-card">
              <h3>Wallet Balance : 5000</h3>
              <button>+ Add Income</button>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card className="expense-card">
              <h3>Expenses: {}</h3>
              <button>+ Add Expenses</button>
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
            <Card>Recent Transactions</Card>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>Top Expenses</Card>
          </Grid>
        </Grid>
      </section>
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
