const express = require('express');
const app = express();
const port = 5000;

// Dummy announcements data
const announcements = [
    { title: 'Youth Service', description: 'This Sunday at 9 AM.' },
    { title: 'Bible Study', description: 'Join us every Wednesday at 7 PM.' },
];

// Endpoint to get announcements
app.get('/announcements', (req, res) => {
    res.json(announcements);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
