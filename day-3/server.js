// const express = require('express');

// const app = express();

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// }); 

// app.get('/about', (req , res)=>{
//     res.send('About Us Page');
// })


// what are api routes
// API routes are endpoints in a web application that allow clients to interact with the server's data and functionality.
// They typically follow REST conventions and return JSON responses.



// rule of rest ful api
// 1. Use nouns to represent resources (e.g., /users, /products).
// 2. Use HTTP methods to define actions (GET, POST, PUT, DELETE).
// protocol is http or https
// host is domain name or ip address
// port is the communication endpoint
// path is the specific resource location on the server



const express = require('express');

const app = express();
app.use(express.json());

const notes = [];

app.post('/notes',(req , res)=>{
    res.send('Create a new note');
    notes.push(req.body);
    console.log(req.body);
})

app.get('/notes',(req , res)=>{
    res.send(notes);
})
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});




