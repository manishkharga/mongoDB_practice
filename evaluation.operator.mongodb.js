use("imdb");

//?evaluation operator
//? $regex
//? $expr

//? find movies whose summary includes "Starling scity"

// db.movies.find({ summary: { $regex: "Starling City", $options: "i" } });

//? find movies whose summary include "pacific"
// db.movies.find({ summary: { $regex: "pacific", $options: "i" } });

//? find movies whose name includes "morty"

// db.movies.find({ name: { $regex: "morty", $options: "i" } });

// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);
//? find products whose order is greater than 50
// db.sales.find({ order: { $gt: 50 } });

//? find products whose order is greater than volume
// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

//? $in
//? find movies whose rating is either 7 0r 7.5 or 8 or 8.5 or 9 or 9.3

// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

//? alternative code

// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

//? $nin=> if $nor is applied in same field ,then $nin is applied to simple the code
//? find movies whose genres is neither "Thriller" nor "crime" nor "supernatural"

// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

//? alternative code
// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
