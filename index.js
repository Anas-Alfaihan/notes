require('dotenv').config();
const app = require('express')();
const bodyParser = require('body-parser');
const { Author } = require('./models/Models');
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ h: 'hello' });
});

require('./startup/routes')(app);
require('./startup/db')(app);
