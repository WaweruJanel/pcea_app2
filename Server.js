const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Dummy data
const announcements = [
    { title: 'Youth Service', description: 'This Sunday at 9 AM.' },
    { title: 'Bible Study', description: 'Join us every Wednesday at 7 PM.' },
];

const sermons = [
    { title: 'Faith in Action', speaker: 'Rev. John Doe', url: 'https://example.com/faith-in-action' },
    { title: 'Living by Grace', speaker: 'Rev. Jane Smith', url: 'https://example.com/living-by-grace' },
];

const users = [{ username: 'admin', password: 'password123' }];

// Routes
app.get('/announcements', (req, res) => {
    res.json(announcements);
});

app.get('/sermons', (req, res) => {
    res.json(sermons);
});

app.post('/prayer-request', (req, res) => {
    const { name, request } = req.body;
    console.log(`Prayer Request: ${name} - ${request}`);
    res.json({ message: 'Thank you for your prayer request. We’ll pray for you!' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful!' });
    } else {
        res.status(401).json({ message: 'Invalid credentials.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
