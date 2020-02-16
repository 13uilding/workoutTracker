const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;


// {
//   type: "resistance",
//   name: "Bicep Curl",
//   duration: 20,
//   weight: 100,
//   reps: 10,
//   sets: 4
// }

//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
