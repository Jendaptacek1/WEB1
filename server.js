const express = require('express');
const app = express();
const path = require('path');

// Serve static HTML files
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(7000, () => {
  console.log('Server running at http://localhost:7000');
});

