const express = require("express");
const app = express();

// routes

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.listen(3000, () => console.log("Listening to port 3000..."));
