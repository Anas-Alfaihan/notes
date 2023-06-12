const authors = require('../routes/Author.route');
const notes = require('../routes/Notes.route');
const auth = require('../middleware/auth');
module.exports = function (app) {
    app.use('/api/author', authors);
    app.use('/api/note', auth, notes);
};
