use("imdb");

//? update=> edit values in document

//?$set

//? update name from "Alish" from "Laxman"

// db.sports.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });

// db.sports.find();

//? increase age for all friend by 10

//? $mul => multiplies field by provided value
//? age = age *2

// db.sports.updateOne(
//   {
//     name: "Nischal",
//   },
//   {
//     $mul: {
//       age: 2,
//     },
//   }
// );

//? divide age of nishcal by 2

// db.sports.updateOne(
//   {
//     name: "Nischal",
//   },
//   {
//     $mul: {
//       age: 0.5,
//     },
//   }
// );

// db.sports.find();
