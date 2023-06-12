const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({ sd: 'sd' });
});

module.exports = router;
