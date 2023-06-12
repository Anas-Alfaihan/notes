const jwt = require('jsonwebtoken');
const { Author } = require('../models/Models');

module.exports = async function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        let author = await Author.findByPk(payload._id);
        req.user = author;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};
