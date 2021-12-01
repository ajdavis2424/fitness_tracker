// Requires for mongos and express server
const express = require("express");
const mongoose = require("mongoose");
const logger = require(morgan)
const PORT = process.env.PORT || 3000;
// Server will use routes directory for routing API &HTML requests
const routes = require("./routes");

const db = require("./models")

const app = express();

app.use(logger("dev"));

app.use('/', routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// // routes
// app.use(require("./routes/api.js"));

// START SERVER
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
