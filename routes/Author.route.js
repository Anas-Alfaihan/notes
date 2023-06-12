const router = require('express').Router();
const { Author } = require('../models/Models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
    let author = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };
    const salt = await bcrypt.genSalt(12);
    console.log(author.password, salt);
    author.password = await bcrypt.hash(author.password, salt);

    let john = await Author.create(author);
    let token = await jwt.sign(
        { _id: john.id, username: john.username },
        process.env.JWT_PRIVATE_KEY
    );
    res.header('x-auth-token', token).json(john);
});

router.post('/login', async (req, res) => {
    let author = await Author.findOne({
        where: {
            username: req.body.username,
        },
    });
    if (!author) return res.status(400).send('Invalid email or password');

    let validPassword = await bcrypt.compare(
        req.body.password,
        author.dataValues.password
    );
    if (!validPassword)
        return res.status(400).send('Invalid email or password');

    let token = await jwt.sign(
        { _id: author.dataValues.id, username: author.dataValues.username },
        process.env.JWT_PRIVATE_KEY
    );
    res.header('x-auth-token', token).json('successfully logedin');
});

module.exports = router;
