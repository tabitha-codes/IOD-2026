const express = require("express");
const router = express.Router();
const friends = require('../models/friends')


// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter

// TODO - #4: Complete the PUT route which will update data for an existing friend


// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get('/filter', (req, res) => {
    console.log(req.query)
    let filterGender = req.query.gender;
    let filterLetter = req.query.letter;
    let matchingFriends = [...friends];

    if (filterGender) {
        matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
    }

   if (filterLetter) {
        matchingFriends = matchingFriends.filter(friend => friend.name.startsWith(filterLetter));
    }
    
    if (matchingFriends.length > 0) {
        // return valid data when the gender matches 
        res.status(200).json(matchingFriends)
    } else {
        // and an error response when there are no matches
        res.status(404).json({error: "No friends the filters"
            + (filterGender ? `gender=${filterGender} ` : '') 
            + (filterLetter ? `letter=${filterLetter}` : '')
        
        })
    }  
})

// tabit@DESKTOP-4T85GBC MINGW64 ~/OneDrive/Desktop/IOD-2026/Module05/LabExercises/exercise04 (master)
// $ node index.js
// Example app listening at http://localhost:3000
// [Object: null prototype] { gender: 'male' }
// [Object: null prototype] { letter: 'R' }
// [Object: null prototype] { gender: 'male', letter: 'R' }
// [Object: null prototype] { letter: 'Z' }
// [Object: null prototype] { letter: 'R' }

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    console.log(req.headers)

// Modify this response to just return info on the user-agent, content-type and accept headers
   res.json({
        userAgent: req.headers['user-agent'],
        contentType: req.headers['content-type'],
        accept: req.headers['accept']
    })
})

// http://localhost:3000/friends/info
// {"userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.134.0 Chrome/148.0.7778.280 Electron/42.8.1 Safari/537.36","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"}
// { host: 'localhost:3000',
//   connection: 'keep-alive',
//   'upgrade-insecure-requests': '1',
//   'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Code/1.13
// 4.0 Chrome/148.0.7778.280 Electron/42.8.1 Safari/537.36',
//   accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
// ,application/signed-exchange;v=b3;q=0.7',
//   'sec-fetch-site': 'none',
//   'sec-fetch-mode': 'navigate',
//   'sec-fetch-user': '?1',
//   'sec-fetch-dest': 'document',
//   'accept-encoding': 'gzip, deflate, br, zstd',
//   'accept-language': 'en-US'
// }

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res) => {
    console.log(req.params)
    let friendId = req.params.id; // 'id' here will be a value matching anything after the / in the request path

    // Modify this function to find and return the friend matching the given ID, or a 404 if not found
    // using .find() to search the friends array for an object where the id matches
    // using == (not ===) because friendId from req.params is always a string, but friend.id is a number
    let friend = friends.find(friend => friend.id == friendId);

    // Modify this response with the matched friend, or a 404 if not found
    if (friend) {
        // friend was found - return it with a 200 status
        res.status(200).json(friend)
    } else {
        // no friend matched this id - return a 404 with a clear error message
        res.status(404).json({error: 'No friend found with ID ' + friendId})
    }
})

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
    console.log(newFriend) // 'body' will now be an object containing data sent via the request body

    // we can add some validation here to make sure the new friend object matches the right pattern
    if (!newFriend.name || !newFriend.gender) {
        res.status(500).json({error: 'Friend object must contain a name and gender'});
        return;
    }
    else if (!newFriend.id) {
        newFriend.id = friends.length + 1; // generate an ID if one is not present
    }

    // if the new friend is valid, add them to the list and return the successfully added object
    friends.push(newFriend)
    res.status(200).json(newFriend)
})

// http://localhost:3000/friends/3
// [Object: null prototype] { id: '3' }
// localhost:3000/friends/99
// [Object: null prototype] { id: '99' }


// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    let friendId = req.params.id;
    let updatedFriend = req.body;

    // Replace the old friend data for friendId with the new data from updatedFriend
    // findIndex gives us the position in the array (not the object itself) so we can overwrite it directly
    // using == not === for the same reason as the GET /:id route - friendId is a string, friend.id is a number
    let friendIndex = friends.findIndex(friend => friend.id == friendId);

    if (friendIndex === -1) {
        // findIndex returns -1 when nothing matches - no friend exists with this id
        res.status(404).json({error: 'No friend found with ID ' + friendId});
        return;
    }

    // keep the original id intact even if the request body didn't include one,
    // then overwrite the rest of the fields with whatever was sent in updatedFriend
    friends[friendIndex] = { ...friends[friendIndex], ...updatedFriend, id: friends[friendIndex].id };

    // Modify this response with the updated friend, or a 404 if not found
    res.status(200).json({result: 'Updated friend with ID ' + friendId, data: friends[friendIndex]})
})

module.exports = router;