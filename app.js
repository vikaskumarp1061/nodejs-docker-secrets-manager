// Import dotenv package and load environment variables
require('dotenv').config();

// Import express
const express = require('express');
const app = express();
const port = 3000;

// Log the contents of .env file
console.log('Contents of .env file:');
console.log(process.env);

// Define a route to fetch credentials
app.get('/', (req, res) => {
    // Fetch credentials from environment variables
    const username = process.env.USERNAME;
    const password = process.env.PASSWORD;

    // Return credentials as JSON response
    res.json({ username, password });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

