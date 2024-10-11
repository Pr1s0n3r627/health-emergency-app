// showcase/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to send a simple response
app.get('/data', (req, res) => {
  res.json({ message: 'This is a showcase demo!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
