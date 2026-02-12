const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/fullstackDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/users", userRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
