-- Exercise 3 - MySQL Blogging Database
-- Module 8: Databases
-- Based on the Exercise 1 logical and physical model

-- Start fresh so the script can be run more than once
DROP DATABASE IF EXISTS blog_db;
CREATE DATABASE blog_db;
USE blog_db;

-- ---------- TABLES ----------

CREATE TABLE users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id)
);

CREATE TABLE posts (
  post_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (post_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
  comment_id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  comment_text TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (post_id) REFERENCES posts(post_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Linking table for the many-to-many relationship between users and posts.
-- UNIQUE (post_id, user_id) means a user can only like a post once.
CREATE TABLE likes (
  like_id INT NOT NULL AUTO_INCREMENT,
  post_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (like_id),
  UNIQUE (post_id, user_id),
  FOREIGN KEY (post_id) REFERENCES posts(post_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- ---------- TEST DATA ----------

INSERT INTO users (username, email, password) VALUES
  ('jsmith', 'jsmith@example.com', 'hashed_password_1'),
  ('mlee', 'mlee@example.com', 'hashed_password_2');

INSERT INTO posts (user_id, title, description, image_url) VALUES
  (1, 'My First Blog Post', 'This is my first post on the blog.', 'https://example.com/images/post1.jpg'),
  (2, 'Weekend Trip', 'Photos and notes from my weekend trip.', 'https://example.com/images/post2.jpg');

INSERT INTO comments (post_id, user_id, comment_text) VALUES
  (1, 2, 'Great first post!'),
  (2, 1, 'Looks like a fun trip.');

INSERT INTO likes (post_id, user_id) VALUES
  (1, 2),
  (2, 1);

-- ---------- TESTS ----------

SHOW TABLES;

SELECT * FROM users;
SELECT * FROM posts;
SELECT * FROM comments;
SELECT * FROM likes;

-- Each post with the username of its author
SELECT posts.post_id, posts.title, users.username AS author
FROM posts
JOIN users ON posts.user_id = users.user_id;

-- Each comment with the post title and who wrote it
SELECT posts.title, users.username AS commenter, comments.comment_text
FROM comments
JOIN posts ON comments.post_id = posts.post_id
JOIN users ON comments.user_id = users.user_id;

-- Count likes instead of storing a like count
SELECT COUNT(*) AS num_likes FROM likes WHERE post_id = 1;

-- Update a post title
UPDATE posts SET title = 'My First Blog Post (Updated)' WHERE post_id = 1;
SELECT * FROM posts WHERE post_id = 1;

-- ---------- ERROR TESTS (run one at a time) ----------
-- These are supposed to fail.
-- Duplicate like - should fail with Error 1062 (Duplicate entry)
-- Post for a user that doesn't exist - should fail with Error 1452 (foreign key constraint fails)
INSERT INTO likes (post_id, user_id) VALUES (1, 2);
INSERT INTO posts (user_id, title) VALUES (99, 'Bad post');
