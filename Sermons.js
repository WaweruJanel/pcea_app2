const express = require('express');
const app = express();
const port = 5000;

// Dummy sermons data
const sermons = [
    { title: 'Faith in Action', speaker: 'Rev. Edward Buri', url: 'https://example.com/faith-in-action' },
    { title: 'Living by Grace', speaker: 'Rev. Michael Njige', url: 'https://example.com/living-by-grace' },
];

// Endpoint to get sermons
app.get('/sermons', (req, res) => {
    res.json(sermons);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
