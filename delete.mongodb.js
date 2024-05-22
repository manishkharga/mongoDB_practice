use("imdb");

//? deleteOne
//? delete first document which matches yhe condition(filter)

// db.movies.deleteOne({ id: 15 });
// db.movies.find({ id: 15 });

//? DeleteMany
//? deletes all document that matches the filter

// db.movies.deleteMany({ $and: [{ status: "Running" }, { runtime: 60 }] });

// db.movies.find({ $and: [{ status: "Running" }, { runtime: 60 }] });

// ? delete movies whose genres includes "Drama" and "Thriller"'

// db.movies.deleteMany({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });

// ? delete a movie whose name is "Manhattan Love Story"'

// db.movies.deleteOne({ name: "Manhattan Love Story" });
// db.movies.find({ name: "Manhattan Love Story" });

// ? delete movies whose  network country us "Canada"
// db.movies.deleteMany({ "network.country.name": "Canada" });
// db.movies.find({ "network.country.name": "Canada" });

// ? delete movies whose rating is greater than 8 and less than or equal to 9

db.movies.deleteMany({
  $and: [{ "rating.average": { gt: 8 } }, { "rating.average": { $lte: 9 } }],
});
// db.movies.find({
//   $and: [{ "rating.average": { gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });
// db.movies.find();
