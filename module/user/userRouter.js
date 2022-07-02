const router = require('express').Router();
const auth = require('../../midelWare/auth');
const addUser = require('./controoler/addUser');
const deleted = require('./controoler/deleted');
const getall = require('./controoler/getAll');
const getOne = require('./controoler/getone');
const prof = require('./controoler/profail');
const signin = require('./controoler/signin');
const update = require('./controoler/update');

router.get('/user', getall);
router.get('/user/:id', getOne);
router.post('/user', addUser);
router.post('/signin', signin);
router.get('/profail', auth, prof);
router.put('/user/:id', update);
router.delete('/user/:id', deleted);

module.exports = router;