//dependencies
const express = require('express');
const path = require('path');
//app and port
const app = express()
const port = process.env.port || 3001

//middlewares
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
