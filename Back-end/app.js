const express = require("express");
const app = express();

// routes
const devProfileRoute = require("./routes/developers");

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.use("/api/v1/developers", devProfileRoute);

const port = 3030;

app.listen(port, () => console.log(`Listening to port ${port}...`));
