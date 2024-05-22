use("daraz");
// to create a collection

// db.createCollection("Customer");

//crud basics
//insert item
// db.product.insertOne({
//   name: "phone",
//   brand: "apple",
//   price: 80000,
//   discount: "available",
// });

// db.product.insertMany([
//   {
//     name: "television",
//     brand: "samsung",
//     price: 120000,
//     discount: "not-available",
//   },
//   {
//     name: "speaker",
//     brand: "JBL",
//     price: 30000,
//     discount: "available",
//   },
//   {
//     name: "laptop",lt
//     brand: "acer",
//     price: 110000,
//     discount: "not-available",
//   },
// ]);
// db.product.insertOne({
//   name: "phone",
//   brand: "apple",
//   price: 80000,
//   discount: "not-available",
// });

// db.product.find();
// db.product.find({ brand: "apple", discount: "not-available" });
// db.createCollection("Customer");

// db.posts.insertOne({
//   title: "Post Title 1",
//   body: "Body of post.",
//   category: "News",
//   likes: 1,
//   tags: ["news", "events"],
//   date: Date(),
// });

// db.posts.insertMany([
//   {
//     title: "Post Title 2",
//     body: "Body of post.",
//     category: "Event",
//     likes: 2,
//     tags: ["news", "events"],
//     date: Date(),
//   },
//   {
//     title: "Post Title 3",
//     body: "Body of post.",
//     category: "Technology",
//     likes: 3,
//     tags: ["news", "events"],
//     date: Date(),
//   },
//   {
//     title: "Post Title 4",
//     body: "Body of post.",
//     category: "Event",
//     likes: 4,
//     tags: ["news", "events"],
//     date: Date(),
//   },
// ]);

// db.posts.find({ category: "News" });

// db.posts.find({ title: "Post Title 1" });
// db.posts.updateOne({ title: "Post Title 1" }, { $set: { likes: 2 } });

//upsert
// db.posts.updateOne(
//   { title: "Post Title 5" },
//   {
//     $set: {
//       title: "Post Title 5",
//       body: "Body of post.",
//       category: "Event",
//       likes: 5,
//       tags: ["news", "events"],
//       date: Date(),
//     },
//   },
//   { upsert: true }
// );

// db.posts.updateMany({}, { $inc: { likes: 1 } });

// db.posts.deleteOne({ title: "Post Title 5" });

// db.posts.deleteMany({ category: "Technology" });

//aggregation*****************************
// db.posts.aggregate([
//   // Stage 1: Only find documents that have more than 1 like
//   {
//     $match: { likes: { $gt: 1 } },
//   },
//   // Stage 2: Group documents by category and sum each categories likes
//   {
//     $group: { _id: "$category", totalLikes: { $sum: "$likes" } },
//   },
// ]);

// showdbs;

// db.posts.find();
