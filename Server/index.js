const express = require("express");

const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 5000;

var cors = require("cors");
var path = require("path");

app.use(cors());

//Middleware
app.use(express.json());

//Routes
app.use("/event/category", require("./routes/category.js"));

app.listen(port, () => {
  console.log(`Event server listening on port ${port}`);
});
