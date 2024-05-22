use("imdb");

//? array ipdate operator
//? $push, $pop, $pull, $pullAll

//? $push => adds new data to end of an array

// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

//? push "Singing" and "Biking" to Laxman's hobbies(add multiple value)
//? $each is called modifier
// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Riding"] },
//     },
//   }
// );

// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Cardio",
//     },
//   }
// );

//? $addToset => push value to array if that item is not already there
// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Cycling", "Learning"] },
//     },
//   }
// );

//? add Hiking and cricket to hobbies of unique

// db.sports.updateOne(
//   { name: "Unique" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Hiking", "Cricket"] },
//     },
//   }
// );

//? add Cycling and Cricket to Prakash hobbies

// db.sports.updateOne(
//   { name: "Prakash" },
//   {
//     $addToSet: {
//       hobbies: { $each: ["Cycling", "Cricket"] },
//     },
//   }
// );

//? $pop => removes items from start and end of array

//? 1=>removes value from end of array
//? -1=> removes value from start of array

// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       hobbies: 1,
//     },
//   }
// );

// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       hobbies: -1,
//     },
//   }
// );
//? remove last and first item from laxman scores
// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       scores: -1,
//     },
//   }
// );

// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pop: {
//       scores: 1,
//     },
//   }
// );

//? $pull=> remove item based upon condition

// db.sports.updateOne(
//   { name: "Nischal" },
//   {
//     $pull: {
//       scores: { sub: "Science" },
//     },
//   }
// );

// db.sports.updateOne(
//   { name: "Unique" },
//   {
//     $pull: {
//       scores: { point: { $gt: 70 } },
//     },
//   }
// );

//? remove scores for Praksh whose point is greater than 60
// db.sports.updateOne(
//   { name: "Prakash" },
//   {
//     $pull: {
//       scores: { point: { $lte: 60 } },
//     },
//   }
// );

//? remove "Singing" from laxman hobbies
// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pull: {
//       hobbies: "Singing",
//     },
//   }
// );

//?! remove "Cricket" and "Basketball" from Praksh hobbies

// db.sports.updateOne(
//   { name: "Prakash" },
//   {
//     $pop: {
//       hobbies: { $in: ["Cricket", "Basketball"] },
//     },
//   }
// );

//? pullAll => removes all matching values from an array
//? condition does not work here(removes multiple value)
// db.sports.updateOne(
//   { name: "Laxman" },
//   {
//     $pullAll: {
//       hobbies: ["Dancing", "Riding"],
//     },
//   }
// );
// db.sports.find();
