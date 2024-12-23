const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 9002;
const connectDB = require("./dbConnection");
app.use(express.json());
app.use(cors());
const Gift = require("./giftModel");

connectDB();
app.post("/selectgift", async (req, res) => {
  try {
    const { giftName, userName } = req.body;

    if (!giftName || !userName) {
      return res.status(400).json({
        success: false,
        message: "Both giftName and userName are required..",
      });
    }

    // Create the gift entry in the database
    const gift = await Gift.create({ giftName, userName });

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "Gift successfully created!",
      data: gift, // Optional: Include the created gift details
    });
  } catch (error) {
    console.error("Error creating gift:", error.message);

    // Handle database-specific or internal errors
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
    });
  }
});
app.get("/", (req, res) => {
  res.send("Hi welcome to birthday wisher");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
