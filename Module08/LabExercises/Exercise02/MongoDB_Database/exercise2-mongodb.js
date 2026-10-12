// Exercise 2 - MongoDB Blogging Database
// Module 8: Databases
// Collections: users, posts, comments, likes (based on the Exercise 1 logical model)

// Switch to (and create) the blogDB database
db = db.getSiblingDB("blogDB");

// ---------- USERS ----------
const user1 = db.users.insertOne({
  username: "jsmith",
  email: "jsmith@example.com",
  password: "hashed_password_1",
  created_at: new Date()
}).insertedId;

const user2 = db.users.insertOne({
  username: "mlee",
  email: "mlee@example.com",
  password: "hashed_password_2",
  created_at: new Date()
}).insertedId;

// ---------- POSTS ----------
// user_id links each post to the user who wrote it
const post1 = db.posts.insertOne({
  user_id: user1,
  title: "My First Blog Post",
  description: "This is my first post on the blog.",
  image_url: "https://example.com/images/post1.jpg",
  created_at: new Date()
}).insertedId;

const post2 = db.posts.insertOne({
  user_id: user2,
  title: "Weekend Trip",
  description: "Photos and notes from my weekend trip.",
  image_url: "https://example.com/images/post2.jpg",
  created_at: new Date()
}).insertedId;

// ---------- COMMENTS ----------
// post_id = which post, user_id = who wrote the comment
db.comments.insertMany([
  { post_id: post1, user_id: user2, comment_text: "Great first post!", created_at: new Date() },
  { post_id: post2, user_id: user1, comment_text: "Looks like a fun trip.", created_at: new Date() }
]);

// ---------- LIKES ----------
// Linking collection for the many-to-many relationship between users and posts.
// Unique index so a user can only like the same post once.
db.likes.createIndex({ post_id: 1, user_id: 1 }, { unique: true });

db.likes.insertMany([
  { post_id: post1, user_id: user2 },
  { post_id: post2, user_id: user1 }
]);

// ---------- TESTS ----------
printjson(db.getCollectionNames());                  // comments, likes, posts, users
printjson(db.users.find().toArray());
printjson(db.posts.find({ user_id: user1 }).toArray());
printjson(db.comments.find({ post_id: post1 }).toArray());
print(db.likes.countDocuments({ post_id: post1 })); // 1

db.posts.updateOne({ _id: post1 }, { $set: { title: "My First Blog Post (Updated)" } });
printjson(db.posts.find({ _id: post1 }).toArray());

// Duplicate like test (run separately - this is supposed to fail with E11000):
// db.likes.insertOne({ post_id: post1, user_id: user2 })