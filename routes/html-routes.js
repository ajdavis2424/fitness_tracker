// Requires
const router = require("express").Router();
const path = require("path");

// ALL THIS CODE WILL TAKE THE STARTER HTML FILES IN PUBLIC (INDEX/EXERCISE/STATS) FROM SERVER.JS TO
	router.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	router.get("/exercise", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});

	router.get("/stats", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});

module.exports = router;