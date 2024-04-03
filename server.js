//dependencies
const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');
//app and port
const app = express()
const PORT = process.env.PORT || 3001

//middlewares
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));
//middleware for routes
app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
