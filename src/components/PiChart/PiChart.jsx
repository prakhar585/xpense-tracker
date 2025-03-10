import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const PiChart = ({ data }) => {
  console.log(data);

  // Group data by category and sum up the prices
  const categoryData = data.reduce((acc, item) => {
    const category = item.category;
    const price = parseFloat(item.price); // Convert price to number
    
    if (acc[category]) {
      acc[category] += price;
    } else {
      acc[category] = price;
    }
    return acc;
  }, {});

  // Convert the grouped data into an array format for PieChart
  const pieChartData = Object.entries(categoryData).map(([category, total], index) => ({
    id: index,
    label: category,
    value: total,
  }));

  return (
    <PieChart
      series={[
        {
          data: pieChartData,
        },
      ]}
      width={350}
      height={105}
    />
  );
};

export default PiChart;
