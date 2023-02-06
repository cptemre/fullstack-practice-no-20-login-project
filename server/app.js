// NPM
require("dotenv").config();
require("express-async-errors");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

// FOR V7
mongoose.set("strictQuery", true);

// DATABASE
const connectDB = require("./database/connectDB");

// PORT
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
const notFound = require("./errors/notFound");
const errorHandler = require("./middleware/errorHandler");
const auth = require("./middleware/auth");

// ROUTES
const router = require("./routes/router");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", router);
app.use(errorHandler);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`SERVER IS LISTENING ON PORT: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
