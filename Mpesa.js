const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());

// Example endpoint
app.post('/donate', (req, res) => {
    const { phone, amount } = req.body;
    console.log(`Processing donation: Phone: ${phone}, Amount: ${amount}`);
    res.json({ message: 'Donation request received!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
