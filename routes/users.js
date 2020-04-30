const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
    /* GET users listing. */
router.get('/', UserController.getAll);
router.post('/', UserController.register);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;