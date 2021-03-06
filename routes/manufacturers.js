const express = require('express');
const router = express.Router();
const controller = require('../controllers/manufacturers');
const service = require('../services/manufacturers');
const token = require('../middlewares/auth');

router.get('/', controller.findAll);
router.get('/:id', controller.find);
router.post('/', token.authorization, token.permissions(['admin','super']), service.create, controller.create);
router.put('/:id', token.authorization, token.permissions(['super']), service.update, controller.update);
router.delete('/:id', token.authorization, token.permissions(['super']), service.delete, controller.delete);


module.exports = router;