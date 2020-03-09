const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter a type of exercise."
        },
        name: {
          type: String,
          trim: true,
          required: "Enter an exercise name."
        },
        duration: {
          type: Number,
          required: "Enter the duration."
        },
        weight: {
          type: Number,
          required: false
        },
        reps: {
          type: Number,
          required: false
        },
        sets: {
          type: Number,
          required: false
        },
        distance: {
          type: Number,
          required: false
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

// // db.Workout.deleteMany({}) followed by a .then
// db.Workout.deleteMany({})
// // Then we run db.Workout.collection.insertMany(workoutSeed)
//   .then(() => db.Workout.collection.insertMany(workoutSeed))
//   // Then we use that data to console log the results
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     // It looks like we then end the process
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
