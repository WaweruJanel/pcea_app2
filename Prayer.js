const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());

// Endpoint to handle prayer requests
app.post('/prayer-request', (req, res) => {
    const { name, request } = req.body;
    console.log(`Prayer Request Received: ${name} - ${request}`);
    res.json({ message: 'Thank you for your prayer request. We’ll pray for you!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
