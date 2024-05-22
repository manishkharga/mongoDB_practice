use("imdb");

//? aggregate is read operation(Query Tool)
//? pipeline Stages
//? $match
//? $sort
//? $limit
//? $skip
//? $project
//? $group
//? $unwind
//? $lookup

//? $match=> It is a filter stage, similar to read operation
//? we use id to not view on screen during runtime
//? for selction 1=> to show 0=> false(not show)

// db.movies.aggregate([
//   {
//     $match: {
//       status: "Ended",
//       "rating.average": { $gte: 7 },
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       status: 1,
//       rating: 1,
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: {
//       status: "Ended",
//       "rating.average": { $gte: 7 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       status: 1,
//       summary: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

//? for counting Total Data
// db.movies.find();

// db.movies.aggregate([
//   {
//     $match: {
//       "rating.average": { $gt: 8 },
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       avgRating: "$rating.average",

//       scheduleDay: { $first: "$schedule.days" },

//       genres: 1,
//       secondGenres: { $arrayElemAt: ["$genres", 1] },
//       lastGenres: { $last: "$genres" },
//     },
//   },
//   //? for ascending order(1)
//   // {
//   //   $sort: {
//   //     avgRating: 1,
//   //   },
//   // },
//   //? for descending order(-1)
//   {
//     $sort: {
//       avgRating: -1,
//     },
//   },
// ]);
