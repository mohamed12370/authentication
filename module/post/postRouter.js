const router = require('express').Router();
const add = require('./controller/add');
const deleted = require('./controller/del');
const getAll = require('./controller/getall');
const getOne = require('./controller/getone');
const update = require('./controller/update');

router.get('/post', getAll);
router.get('/post/:id', getOne);
router.post('/post', add);
router.delete('/post/:id', deleted);
router.put('/post/:id', update);

module.exports = router;