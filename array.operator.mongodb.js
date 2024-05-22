use("imdb");

//? array read operator
//? $all(should be applied in array field)
//? $elemMatch
//? $size

// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);

//? find students whose fav singer includes "Arijit" and "Shreya"

// db.students.find({ $and: [{ favouriteSingers: { "Arijit","Shreya" } } ]});

// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });

//? alternative code using $all operator

// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });

//?$size

// db.students.insertOne({
//   name: "Rina",
//   favoriteSingers: ["Neha", "Tony"],
//   hobbies: [
//     {
//       name: "Dancing",
//       frequency: 10,
//     },
//   ],
// });

//? find students who has two favourite singer
//! $size does not accept range such as $gt,$lt(accept array size)

// db.students.find({ favoriteSingers: { $size: 2 } });

//? find student who has three favourite singer

// db.students.find({ favoriteSingers: { $size: 3 } });

//? find students who has only one hobbies

// db.students.find({ hobbies: { $size: 1 } });

//?elemMatch(to find dATA IN SINGLE OBJECT WE USE elemMatch)

//? find students whose hobbies is "Pubg" and frequency is greater than 6

// db.students.find({
//   $and: [{ "hobbies.name": "PubG" }, { "hobbies.frequency": { $gt: 6 } }],
// });

// db.students.find({
//   hobbies: { $elemMatch: { name: "PubG", frequency: { $gt: 6 } } },
// });

//? find students whose hobbies is "singing" and frequency is gt>=5

// db.students.find({
//   hobbies: { $elemMatch: { name: "Singing", frequency: { $gte: 5 } } },
// });
