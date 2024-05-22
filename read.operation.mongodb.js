use("imdb");

// ? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne

// db.movies.find({ name: { $eq: "Under the Dome" } });
// db.movies.find({ name: "Under the Dome" });

//?  $lt

// db.movies.find({ runtime: { $lt: 80 } });

// db.movies.find({ id: { $lt: 3 } });

//? $gt
// db.movies.find({ "rating.average": { $gt: 9 } });

// ? find movies whose language is Japanese

// db.movies.find({ language: "Japanese" });

// ?find movies whose runtime is less than 30

// db.movies.find({ runtime: { $lt: 30 } });

// ? find movies whose runtime is greater than 90

// db.movies.find({ runtime: { $gt: 90 } });

// ? find movies whose rating is less than or equal to 6

// db.movies.find({ "rating.average": { $lte: 6 } });

// ? $ne

// db.movies.find({ language: { $not: { $eq: "Japanese" } } });

// equivalent
// db.movies.find({ language: { $ne: "English" } });

//?find movies whose status in not ended
// db.movies.find({ status: { $ne: "Ended" } });

//? find movies whose weight is not 75

// db.movies.find({ weight: { $ne: 75 } });

//mobie whose genres includes crime

// db.movies.find({ genres: "Crime" });

//? logical operator
//? $and, $or ,$nor

//$and

// db.movies.find({
//   $and: [
//     { language: "English" },
//     { runtime: 60 },
//     { genres: "Science-Fiction" },
//   ],
// });

//? find movies whose weight is greater than 75 and rating is greater than 7

// db.movies.find({
//   $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
// });

//? find movies whose genres is "drama" and "Crime"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

//?find movies whose network country name is "united states" and status is running

// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

//?find movies whose rating is greater than 7 and less than equal to 9

// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

// db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });
// db.movies.find({ $and: [{ type: "Scripted", language: "English" }] });

// db.movies.find({ type: "Scripted", language: "English" });

//? find movies whose rating is greater than 8 or genres is "thriller"

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "thriller" }],
// });

//?Find movies whose status is "Ended"

// db.movies.find({ status: "Ended" });
// db.movies.find({ status: "Running" });

// ?find movies whose rating is 9

// db.movies.find({ "rating.average": 9 });

// ?find movies whose rating is greater than 7 and less than 9
// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lt: 9 } }],
// });

// db.movies.find({ $and: [{ "rating.average": { $gt: 8, $lt: 9 } }] });

// ?find movies whose genres is Thriller

// db.movies.find({ genres: "Thriller" });

// ?find movies whose status is Running

// db.movies.find({ status: "Running" });

//? find movies whose status is Ended and runtime is 60

// db.movies.find({ $and: [{ status: "Ended" }, { runtime: 60 }] });

// ?find movies whose weight is 75 and network country is Canada

// db.movies.find({
//   $and: [{ weight: 75 }, { "network.country.name": "Canada" }],
// });

// ?find movies whose weight is 96 or runtime is 60

// db.movies.find({ $or: [{ weight: 96 }, { runtime: 60 }] });

// ? find movies whose rating average is not 9

// db.movies.find({ "rating.average": { $ne: 9 } });

//? find movies whose genres does not include "Thriller"

// db.movies.find({ genres: { $ne: "Thriller" } });

//? find movies whose status is not ended

// db.movies.find({ status: { $ne: "Ended" } });
//? $nor

//? find movies whose genres is neither "Thriller" nor "Drama"

// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });

//? find movies whose status is neither "Running" nor language is "English"
//just opp of or operator

// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });
// db.movies.find();
