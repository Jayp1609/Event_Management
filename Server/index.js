const express = require("express");

const connectToMongo = require("./db");

connectToMongo();

const app = express();
const port = 5000;

var cors = require("cors");
var path = require("path");

app.use(cors());

//Middleware
// It parses incoming JSON requests and puts the parsed
// data in req.body
app.use(express.json());

//Routes
app.use("/event/category", require("./routes/category.js"));
app.use("/auth", require("./routes/auth.js"));
app.use("/admin", require("./routes/admin.js"));

app.listen(port, () => {
  console.log(`Event server listening on port ${port}`);
});
