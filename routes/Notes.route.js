const router = require('express').Router();
const { Note, Author } = require('../models/Models');

router.post('/', async (req, res) => {
    let note = {
        title: req.body.title,
        description: req.body.description,
    };
    const data = await Note.create(note, { include: [Author] });
    await data.setAuthor(req.user);

    res.json(data);
});

router.get('/', async (req, res) => {
    console.log(req.user.dataValues.id);
    let { Notes } = await Author.findByPk(req.user.dataValues.id, {
        include: Note,
    });
    res.send(Notes);
});
router.get('/:pk', async (req, res) => {
    let note = await Note.findByPk(req.params.pk);
    if (!note) return res.status(404).send('there is no such note.');
    if (!note.dataValues.Authorid === req.user.dataValues.id)
        return res.status(401).send('Not your note.');
    res.json(note);
});
router.delete('/:pk', async (req, res) => {
    let note = await Note.findByPk(req.params.pk);
    if (!note) return res.status(404).send('there is no such note.');
    if (!note.dataValues.Authorid === req.user.dataValues.id)
        return res.status(401).send('Not your note');
    await note.destroy();
    res.json('the note have been deleted');
});

module.exports = router;
