const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
