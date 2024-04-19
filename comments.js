// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import the comments
const comments = require('./comments');

// Use the comments routes
app.use('/comments', comments);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

