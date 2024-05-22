use("netflix");

//add a new movie to movie table
// db.movie.insertOne({
//   name: "cast away",
//   leadActor: "Tom Hanks",
//   releaseyear: 2002,
//   length: 120,
// });

// db.movie.find();

// ?1. add another movie of your choice
// db.movie.insertOne({
//   name: "Batman",
//   leadActor: "christian bale",
//   releaseyear: 2000,
//   length: 90,
// });

// db.movie.find();
//add multiple movie

// db.movie.insertMany([
//   {
//     name: "12th fail",
//     leadActor: "vikrant massey",
//     releaseyear: 2023,
//     length: 150,
//   },
//   {
//     name: "chakka panja",
//     leadActor: "Dipak raj giri",
//     releaseyear: 2022,
//     length: 90,
//   },
// ]);
// db.movie.find();

//?3 find movie whose length is 90
// db.movie.find({ length: 90 });

//?4 find movie whose lead actor is vikrant massey
// db.movie.findOne({ leadActor: "vikrant massey" });

//?4 find movie whose whose name is chakka panja
// db.movie.findOne({ name: "chakka panja" });

//?4 find movie whose releaseyear in 2017
// db.movie.findOne({ releaseyear: 2023 });

//? edit(for update always two condition)
//? change releaseyear of "chakka panja" to 2022

// db.movie.updateOne(
//   { name: "chakka panja" },
//   {
//     $set: {
//       releaseyear: 2016,
//     },
//   }
// );

// db.movie.find();

//? change "batman" to "batman returns"

// db.movie.updateOne(
//   { name: "Batman" },
//   {
//     $set: {
//       name: "Batman returns",
//     },
//   }
// );

// db.movie.find();

//?9 change length of cast away to 90 min

// db.movie.updateOne(
//   { name: "cast away" },
//   {
//     $set: {
//       length: 90,
//     },
//   }
// );

// db.movie.find();

//? change release year to 2002 of cast away

// db.movie.updateOne(
//   { name: "cast away" },
//   {
//     $set: {
//       releaseyear: 2004,
//     },
//   }
// );

// db.movie.updateOne(
//   { name: "cast away" },
//   {
//     $set: {
//       length: 80,
//       releaseyear: 1996,
//     },
//   }
// );

// db.movie.find();

//? update  those movie whose length is 90 t0 length of movie to 75

// db.movie.updateMany(
//   { length: 90 },
//   {
//     $set: {
//       length: 110,
//     },
//   }
// );

//? delete movie name whose main role is "dipak raj giri"
//? delete movie whose length is 150

// db.movie.deleteOne({ leadActor: "Dipak raj giri" });

// db.movie.deleteMany({ length: 110 });

// db.movie.updateOne(
//   { name: "cast away" },
//   {
//     $set: {
//       length: 150,
//     },
//   }
// );

// db.movie.deleteMany({ length: 150 });
db.movie.find();
