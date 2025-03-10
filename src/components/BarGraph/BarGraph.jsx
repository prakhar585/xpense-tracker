import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarGraph = ({ data }) => {
  console.log("Expense Data:", data);

  // Step 1: Group expenses by category
  const categoryData = data.reduce((acc, item) => {
    const category = item.category;
    const price = parseFloat(item.price);

    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  // Step 2: Extract categories (xAxis labels) & corresponding expense values (series data)
  const categories = Object.keys(categoryData);
  const values = Object.values(categoryData);

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: categories }]} // Categories as labels
      series={[{ data: values, label: "Expenses" }]} // Values as data points
      width={500}
      height={300}
    />
  );
};

export default BarGraph;
