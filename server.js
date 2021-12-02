// Requires for mongos and express server
const express = require("express");
const mongoose = require("mongoose");
const logger = require(morgan)
const PORT = process.env.PORT || 3000;
// Server will use routes directory for routing API &HTML requests
const routes = require("./routes");

const db = require("./models")

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  //Per Trey Keep these 
useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(logger("dev"));

app.use(routes);
// // routes
// app.use(require("./routes/api.js"));

// START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
