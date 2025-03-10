import React from "react";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { Box, IconButton } from "@mui/material";

function Transactions({ item }) {
  // Mapping categories to icons
  const categoryIcons = {
    food: <LocalPizzaIcon sx={{ color: "orange", fontSize: 40 }} />,
    entertainment: <CelebrationIcon sx={{ color: "purple", fontSize: 40 }} />,
    travel: <DirectionsCarIcon sx={{ color: "blue", fontSize: 40 }} />,
  };

  return (
    <div style={{ margin: "10px" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          minHeight: "80px", // Reduced height
          borderRadius: "15px", // Rounded corners
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", // Soft shadow
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          {/* Display category icon */}
          <IconButton>{categoryIcons[item.category] || <LocalPizzaIcon sx={{ fontSize: 40 }} />}</IconButton>

          {/* Transaction Details */}
          <Box sx={{ marginLeft: "10px" }}>
            <h3 style={{ margin: "5px 0" }}>{item.title}</h3>
            <p style={{ margin: "3px 0", fontSize: "14px", color: "#555" }}>{item.category}</p>
            <p style={{ margin: "3px 0", fontSize: "14px", color: "#777" }}>{item.date}</p>
            <p style={{ margin: "3px 0", fontWeight: "bold" }}>₹{item.price}</p>
          </Box>
        </Box>

        {/* Action Buttons with Icons */}
        <CardActions>
          <IconButton sx={{ color: "red" }}>
            <DeleteIcon />
          </IconButton>
          <IconButton sx={{ color: "blue" }}>
            <EditIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Transactions;
