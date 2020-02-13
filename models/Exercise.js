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
