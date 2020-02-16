const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// Index file which contains the exercise and workout models
const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// const databaseUrl = "workoutsdb";
// const collections = ["workouts", "exercise"];

// const db = mongojs(databaseUrl, collections);
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttrackerdb", { useNewUrlParser: true });

app.get("/", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    }) 
    .catch(err => {
      res.status(500).end();
    })
})
app.get("/exercise", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    }) 
    .catch(err => {
      res.status(500).end();
    })
})
app.get("/exercise?", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    }) 
    .catch(err => {
      res.status(500).end();
    })
})


// Api routes
app.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(workout => {
      res.json(workout);
    }) 
    .catch(err => {
      res.status(500).end();
    })
})
app.post("/api/workouts", ({ body }, res) => {
// Creates a new note using req.bod
  db.Workout.create(body)
  // Then we take the _id from the newly created workout
    .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    // Finding first user (one user), then pushing the _id of the newly-created workout to the user's workouts array
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    })
});
// db.User.create({ name: "Ernest Hemingway" })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.get("/notes", (req, res) => {
//   db.Note.find({})
//     .then(dbNote => {
//       res.json(dbNote);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/user", (req, res) => {
//   db.User.find({})
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submit", ({ body }, res) => {
// // Creates a new note using req.bod
//   db.Note.create(body)
//   // Then we take the _id from the newly created note
//     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
//     // Finding first user (one user), then pushing the _id of the newly-created note to the user's notes array
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

// app.get("/populateduser", (req, res) => {
//   // TODO
//   // =====
//   db.User.find({})
//     .populate("notes")
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
