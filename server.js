//dependencies
const express = require('express');
const api = require('./routes/index.js');
//app and port
const app = express()
const PORT = process.env.PORT || 3001

//middlewares
// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded ({ extended: true }));

//middleware for routes
app.use('/api', api);
app.use(api);


// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
