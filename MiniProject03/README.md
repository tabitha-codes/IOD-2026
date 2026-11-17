# Mini Project 3 - Rick and Morty API

By Tabitha Miller

For this project I'm using the Rick and Morty API again. I used it in my Module 9 blog app lab, but there it only showed the characters and never saved them. Now I fetch the characters once, save them in my own MongoDB database, and do Create, Read, Update and Delete on them with Postman.

There is no front end. The "View" part of MVC is the JSON the API sends back.

## The external API

- Rick and Morty API: https://rickandmortyapi.com
- Free and doesn't need a key.
- It has 800+ characters, 20 per page. Each page has `info.next`, the link to the next page.

## My database

- Database: `rickAndMortyDB`
- Collection: `characters`

I gave this project its own database so it doesn't touch my other MongoDB databases (like my capstone). The seed only clears the `characters` collection in `rickAndMortyDB`. It also stops if `.env` points to any other database.

My model matches the API data, but I only kept the fields I need:

| My field | From the API | Notes |
|---|---|---|
| apiId | id | The API's id. Characters I make in Postman don't have one |
| name | name | Required |
| status | status | Alive, Dead or unknown |
| species | species | |
| type | type | Usually empty |
| gender | gender | Female, Male, Genderless or unknown |
| origin | origin.name | The API sends an object, I only save the name |
| location | location.name | Same as origin |
| image | image | Link to the picture |
| episodeCount | episode | The API sends a list of episode links, I save how many |

MongoDB also adds `_id`, `createdAt` and `updatedAt`.

## Folder structure (MVC)

```
miniProject03/
├── server.js                  Starts the server
├── app.js                     Sets up Express and the routes
├── dbConnect.js               Connects to rickAndMortyDB
├── seed.js                    Gets the API data and saves it (npm run seed)
├── models/
│   └── character.js           M - the shape of the data
├── controllers/
│   ├── characterController.js C - Create, Read, Update, Delete
│   └── helpers.js
├── routes/
│   └── characterRoutes.js     Connects each URL to the controller
├── middleware/
│   └── errorHandler.js        Turns errors into clear JSON messages
└── postman/
    └── MiniProject03.postman_collection.json
```

## How to run it

1. Make sure MongoDB is running on your computer.
2. Copy `.env.example` and rename the copy to `.env`.
3. In the project folder, run:
   ```
   npm install
   npm run seed
   npm start
   ```
4. The seed takes about 30 seconds and should end with `Saved 826 characters to rickAndMortyDB`.

The seed waits half a second between pages. The first time I ran it, the API sent error 429 (too many requests) after 600 characters, so now it waits and tries again if that happens.
5. The server should say `Server is running on http://localhost:8082`.

## Endpoints

| Method | URL | Body (JSON) | What it does |
|---|---|---|---|
| GET | /api/characters | - | Read all characters |
| GET | /api/characters?status=Alive&species=Human | - | Read with filters |
| GET | /api/characters/:id | - | Read one character |
| POST | /api/characters | name (required), plus any other fields | Create a character |
| PUT | /api/characters/:id | Only the fields to change | Update a character |
| DELETE | /api/characters/:id | - | Delete a character |

`:id` is the MongoDB `_id`, not the API's id.

## Testing in Postman

1. In Postman, click **Import** and pick `postman/MiniProject03.postman_collection.json`.
2. Run **Post data** first. It saves the new `_id`, so Get one Character, Update character and Delete character use it.
3. Then run Get one Character, Update character and Delete character in that order.

Tip: for POST and PUT, go to Body, pick raw, and change Text to **JSON**. My first POST was on Text, and my fields didn't come through.

## Tools

Node.js, Express 5, MongoDB, Mongoose, dotenv, Postman

## Credits

- Data: Rick and Morty API (https://rickandmortyapi.com)
- I built on my Module 8 and 9 labs. The error handler and helpers come from my Module 9 blog app.
- I planned this project and picked the API. Claude (AI) helped me write and debug the code, and I went through it to understand each part.
