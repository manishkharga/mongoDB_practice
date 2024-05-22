use("imdb");

//? pagination
//? $skip
//? $limit

//? Formula for skip(page 1)
//? skip : (page-1)*limit

let page = 1;
const limit = 5;

let skip = (page - 1) * limit;
let searchText = "G";
let sortField = "name";
let sortOrder = "asc";
db.movies.aggregate([
  {
    $match: { name: { $regex: searchText, $options: "i" } },
  },
  { $skip: skip },
  { $limit: limit },
  {
    $project: {
      name: 1,
      id: 1,
      _id: 0,
    },
  },
]);

// db.movies.find();
