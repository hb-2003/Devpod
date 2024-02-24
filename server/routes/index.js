const express = require('express');
const  router = express.Router();
const UserControllers = require('../controllers/UserControllers');
router.post('/user', UserControllers);
modules = exports = router;
