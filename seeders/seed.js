let mongoose = require("mongoose");
// This doesn't point to any real file yet
let db = require("../models");
// Connects to localhost/workout with the options
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});
// Create an array with 10 objects possibly past dates
// object 
let workoutSeed = [
  {
    // day key with value of constructor Date().setDate(new Date().getDate()-10)
    day: new Date().setDate(new Date().getDate()-10),
    // exercises key with value of array with more objects describing the type, name, duration, weight, reps, sets
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    // Exercises with type cardio only have the following keys: type, name, duration, distance
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  }
];
// db.Workout.deleteMany({}) followed by a .then
db.Workout.deleteMany({})
// Then we run db.Workout.collection.insertMany(workoutSeed)
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  // Then we use that data to console log the results
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // It looks like we then end the process
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
