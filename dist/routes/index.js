"use strict";
var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Information Technology Quality Managment' });
});
module.exports = router;
//# sourceMappingURL=index.js.map