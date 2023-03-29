// Server start-up dependencies
const express = require('express');
const app = express();
const PORT = 8080;

// Define first route and server response
app.get('/', (req, res) => {
  res.send('Hello World');
});


// Start the server and log that it's running
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
