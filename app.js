const express = require('express')
const bodyParser = require('body-parser')
const app = express();

// Home Path 
app.get('/', (req, res) => {
    return res.send("Home Page")
})

// Middlewares
app.use(bodyParser.json())

// data to post 
const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    { id: 4, title: 'Post 4' },
    { id: 5, title: 'Post 5' },
    { id: 6, title: 'Post 6' },
    { id: 7, title: 'Post 7' },
    { id: 8, title: 'Post 8' },
    { id: 9, title: 'Post 9' },
    { id: 10, title: 'Post 10' },
    { id: 11, title: 'Post 11' },
    { id: 12, title: 'Post 12' },
    { id: 13, title: 'Post 13' },
    { id: 14, title: 'Post 14' },
    { id: 15, title: 'Post 15' },
    { id: 16, title: 'Post 16' },
    { id: 17, title: 'Post 17' },
    { id: 18, title: 'Post 18' },
    { id: 19, title: 'Post 19' },
    { id: 20, title: 'Post 20' },
];

// Post Route which will post 
app.post('/posts',(req,res)=>{
    return res.json(posts)
})

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});