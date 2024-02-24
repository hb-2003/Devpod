const USerController = require('../controllers/UserController');
const express = require('express');
const router = express.Router();

router.post('/register', USerController.register);
router.post('/login', USerController.login);
router.patch('/updateUser/:id', USerController.updateUser);

module.exports = router;