// Get the tools we need from Node.js
const express = require("express");
const path = require("path");

// Create an Express application.
const app = express();

const PORT = process.env.PORT || 3000;

// Tell Express to get the static files (like HTML, CSS, images) from the project's main folder.
app.use(express.static(path.join(__dirname)));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Send the index.html file.
});

// Start the server and tell it to listen on the port we chose.
const listener = app.listen(PORT, () => {
  // When the server is ready, print a message in the terminal.
  console.log(`Your portfolio is listening on port ${listener.address().port}`);
  console.log(`Access it locally at: http://localhost:${listener.address().port}`);
});
