const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---

// Serve static files from the 'public' directory.
// path.join is used to create a cross-platform compatible file path.
const publicDirectoryPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicDirectoryPath));

// --- Routes ---

// A catch-all route that sends the main index.html file for any request
// that doesn't match a static file. This is useful for client-side routing.
app.get('*', (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// --- Server Activation ---

app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});
