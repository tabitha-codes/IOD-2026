/* 10.Fetch is a browser-based function to send a request and receive a response from a server,
which uses promises to handle the asynchronous response.
The below fetchURLData uses fetch to check the response for a successful status
code, and returns a promise containing the JSON sent by the remote server if successful
or an error if it failed. (To run this code in a node.js environment, follow the instructions in the
comments before the function.)
a) Write a new version of this function using async/await
b) Test both functions with valid and invalid URLs
c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
using Promise.all to combine the results. */
// run 'npm init' and accept all the defaults
// run 'npm install node-fetch'
// run 'npm pkg set type=module'

import fetch from 'node-fetch'
globalThis.fetch = fetch
function fetchURLData(url) {
let fetchPromise = fetch(url).then(response => {
if (response.status === 200) {
return response.json();
} else {
throw new Error(`Request failed with status ${response.status}`);
}
});
return fetchPromise;
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/1')
.then(data => console.log(data))
.catch(error => console.error(error.message));



/* MY ANSWERS:

A] import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  let response = await fetch(url); 
  if (response.status === 200) {
    return await response.json(); 
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

(b) test — valid URL
fetchURLData("https://jsonplaceholder.typicode.com/todos/1") // link works, data saved.
  .then((data) => console.log(data))
  .catch((error) => console.error(error.message));

Output: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
=========================
B] import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  let response = await fetch(url); 
  if (response.status === 200) {
    return await response.json(); 
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

fetchURLData('https://jsonplaceholder.typicode.com/todos/9999999') // link works, data saved.
  .then(data => console.log(data))
  .catch(error => console.error(error.message)); 


Output: $ node exercise10.js
Request failed with status 404
=========================
C] async function fetchAllURLData(urls) {
  let promises = urls.map(url => fetchURLData(url));   
  return await Promise.all(promises);                 
}

// test
fetchAllURLData([
  "https://jsonplaceholder.typicode.com/todos/1", // link works, data saved.
  "https://jsonplaceholder.typicode.com/todos/2", // link works, data saved.
  "https://jsonplaceholder.typicode.com/todos/3" // link works, data saved.
])
  .then(results => console.log(results))              
  .catch(error => console.error(error.message));


Output: "https://jsonplaceholder.typicode.com/todos/1" - { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}
"https://jsonplaceholder.typicode.com/todos/2" - {"userId": 1,"id": 2,"title": "quis ut nam facilis et officia qui","completed": false}
"https://jsonplaceholder.typicode.com/todos/3" - {"userId": 1,"id": 3,"title": "fugiat veniam minus","completed": false}

=========================
*/