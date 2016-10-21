const express = require('express');
const router = express.Router();
const account = require('../controllers/account');

router.get('/register', account.register);
router.post('/register', account.registerPost);
router.get('/login', account.login);
router.post('/login', account.loginPost);
router.get('/find', account.find);
router.get('/repassword', account.repassword);

module.exports = router;
