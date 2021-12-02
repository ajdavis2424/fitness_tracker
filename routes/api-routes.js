// REQUIRES
// Import router from express moduules used for the routing REQ to API
const router = require("express").Router();
const path = require("path");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

// This REQUIRE imports mongoose and workout model into the API router and SHOULD build a sample workout
const db = require("../models");

// const workout = {
//       name: "Running",
//       type: "Cardio",
//       duration: 35,
// }

// GET route for workouts--connect to DB & find docs in the workouts collection & return to json object
router.get("/workouts", (req, res) =>{
      // MONGOOSE find() Method to get all workouts when there's an API call to api/workouts
      db.Workout.find({})
      .then((workout) => {
        console.log(workout);
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
});

// POST route-- User will click create new workout, creating a new workout doc in DB and return as JSON data
router.post("/workouts", (req,res) =>{
      db.Workout.create({})
      .then((brandnewWorkout) => {
            res.json(brandnewWorkout);
      })
      .catch((err) => {
            res.status(400).json(err);
      });
});

// PUT route-- User enters new exercise info, this will push a new exercise object into the workout doc, and return the update
router.put("/workouts/:id", (req, res) => {
	// console.log(req.params.id);
	// console.log(req.body);
	const id = req.params.id;
	const body = req.body;
      db.Workout.findOneAndUpdate({_id: id}, {$push: {exercises: body}})
		.then((data) => {
			console.log(data);
			res.json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

//IF user inputs new exercise info, push a new exercise object into the current workout doc & return the updated workout doc as JSON
router.put("/workouts/:id", (req, res) => {
	const id = req.params.id;
	const body = req.body;
    
	db.Workout.findOneAndUpdate(
	  { _id: id },
	  { $push: { exercises: body } },
	  { new: true, runValidators: true }
	)
	  .then((data) => {
	    res.json(data);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });

router.get("/workouts/range", (req, res) => {
	db.Workout.find({})
	.sort({ date: -1 })
	  .then((data) => {
	    res.json(data);
	  })
	  .catch((err) => {
	    res.status(400).json(err);
	  });
    });







// API ENDPOINTS
// router.get("/", (req, res) =>{
//       console.log(req.path);
//       res.end();



module.exports = router;