const express = require('express');
const app = express();
const PORT = 3000;

// Define the /status endpoint
app.get('/status', (req, res) => {
  res.json({
    status: "ok",
    message: "API is running automatically via Jenkins!"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});