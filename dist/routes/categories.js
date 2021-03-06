'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controllers/categories');
var service = require('../services/categories');
var validator = require('../validators/categories');
var token = require('../middlewares/auth');

router.get('/', controller.findAll);
router.get('/:id', validator.find, controller.find);
router.post('/', token.authorization, token.permissions(['super']), validator.create, service.create, controller.create);
router.put('/:id', token.authorization, token.permissions(['super']), validator.update, service.update, controller.update);
router.delete('/:id', token.authorization, token.permissions(['super']), validator.delete, service.delete, controller.delete);

module.exports = router;
//# sourceMappingURL=categories.js.map