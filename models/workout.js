// require in Mongoose (NOSQL)
const mongoose = require('mongoose');

// buildout Mongo schema below-- schema will connect to Mongo DB collection
const Schema = mongoose.Schema;

// Schema begins-- name, type, weight, sets, reps, and duration of exercise
const workoutSchema = new Schema (
    {
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: true,
              },
        name: {
            type: String, 
            trim: true,
            required: true
            },
        duration: {
            type: Number,
            required: true
            },
        weight: {
            type: Number
            },
        reps: {
            type: Number
            },
        sets: {
            type: Number
        },
        distance: {
            // I wonder can I do km or meters also?
            type: Number
        }      
    }]
},
        {
            toObject: { virtuals: true },
		    toJSON: { virtuals: true },
        });

            // Total the duration of workouts
        workoutSchema.virtual("totalDuration").get(function () {
            return this.exercises.reduce((duration, singleExercise) => {
                return duration + singleExercise.duration;
            }, 0);
        });

        
/** CAN I Create and Save a workout */
// var lift = mongoose.model('Workkout', workoutSchema);

// var createAndSaveWorkout = function(done) {
//   var bigLift = new workoutSchema({type: resistance, name: "Jane Fonda", duration: 45, weight: 100, reps: 100, distance: 2});

//   bigLift.save(function(err, data) {
//     if (err) return console.error(err);
//     done(null, data)
//   });
// };

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout; 