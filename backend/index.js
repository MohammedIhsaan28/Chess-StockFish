const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced security
app.use(helmet());

// Compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, '../dist/Chess-Master-Main')));

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/Chess-Master-Main/index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
