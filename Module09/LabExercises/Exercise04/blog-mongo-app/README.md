# Blog API – Module 9 Exercise 2

An Express back-end for a blog website, using MongoDB through Mongoose.
It follows the database model from Module 8: **users, posts, comments, likes**.

## Folder structure (MVC)

```
blog-mongo-app/
├── server.js              Starts the server
├── app.js                 Sets up Express and the routes
├── dbConnect.js           Connects to MongoDB
├── models/                M – the shape of the data
│   ├── user.js
│   ├── post.js
│   ├── comment.js
│   ├── like.js
│   └── index.js
├── controllers/           C – what happens for each request
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   ├── likeController.js
│   └── helpers.js
├── routes/                Connects each URL to a controller function
│   ├── userRoutes.js
│   └── postRoutes.js
└── middleware/
    └── errorHandler.js    Turns errors into clear JSON messages
```

There is no front-end, so the "View" part of MVC is the JSON the API sends back.

## How to run it

1. Make sure MongoDB is running on your computer.
2. Copy `.env.example` and rename the copy to `.env`.
3. In the project folder, run:
   ```
   npm install
   npm start
   ```
4. You should see `MongoDB connected` and `Server is running on http://localhost:8080`.
5. You should see `MySQL connected to blog_db` and `Server is running on http://localhost:8081`.

## Endpoints

| Method | URL | Body (JSON) | What it does |
|---|---|---|---|
| POST | /api/users | username, email, password | Create a user |
| GET | /api/users | – | List all users |
| GET | /api/users/:id | – | Get one user |
| GET | /api/users/:id/posts | – | All posts by one user |
| POST | /api/posts | user_id, title, description, image_url | Create a post |
| GET | /api/posts | – | All posts with author and like count |
| GET | /api/posts/:id | – | One post with comments and like count |
| PUT | /api/posts/:id | user_id, plus fields to change | Update a post (author only) |
| DELETE | /api/posts/:id | user_id | Delete a post and its comments and likes (author only) |
| POST | /api/posts/:id/comments | user_id, comment_text | Comment on a post |
| GET | /api/posts/:id/comments | – | List a post's comments |
| POST | /api/posts/:id/likes | user_id | Like a post |
| GET | /api/posts/:id/likes | – | Like count and who liked it |
| DELETE | /api/posts/:id/likes | user_id | Remove a like |

## Rules the API enforces

- Passwords are hashed with bcrypt and never sent back.
- Username and email must be unique.
- A user can create as many posts as they want.
- Only **other** users can like a post, and only once.
- Only the author can update or delete their post.
- Like counts are calculated, not stored, matching the Module 8 normalization rule.

## Limitations

There is no login yet, so the API trusts the `user_id` sent in the request body.
A real app would get the user from a login token instead.
