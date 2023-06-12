require('dotenv').config();
const app = require('express')();

app.get('/', (req, res) => {
    res.json({ h: 'hello' });
});

require('./startup/db')(app);
