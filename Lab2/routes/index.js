'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    var method;
    var x = parseFloat(x);
    var y = parseFloat(y);
    var throwError;

    function calculate(method, x, y) {
        if (method == 'add') {
            res.write(x + '+' + y + '=' + (x + y));
        }
        else if (method == 'subtract') {
            res.write(x + '-' + y + '=' + (x - y));
        }
        else if (method == 'multipy') {
            res.write(x + '*' + y + '=' + (x * y));
        }
        else if (method == 'divide') {
            res.write(x + '/' + y + '=' + (x / y));
        }
        else {
            throwError();
        }

    }
    calculate(add, 16, 4);
    console.log(req.query);
    console.log(req.query.method);
    res.render('index', { title: 'Express' });
});

module.exports = router;
