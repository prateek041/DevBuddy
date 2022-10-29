const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// for json transfer.
app.use(express.json());

// database connection.
const connectDB = require("./dataBase/connectdb");

// routes
const devProfileRoute = require("./routes/developers"); // routes to /developers

app.use("/api/v1/developers", devProfileRoute);

const port = process.env.PORT; // port on which backend it listening and serving.

const startApp = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to database");
    app.listen(port, () => console.log(`Listening to port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
