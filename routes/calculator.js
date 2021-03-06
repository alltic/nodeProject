var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sum/:n1/:n2', function(req, res) {
	var sum = parseInt(req.params.n1) + parseInt(req.params.n2);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({'result':sum}));
});

router.get('/sub/:n1/:n2', function(req, res) {
	var sub = parseInt(req.params.n1) - parseInt(req.params.n2);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({'result':sub}));
});

router.get('/mul/:n1/:n2', function(req, res) {
	var mul = parseInt(req.params.n1) * parseInt(req.params.n2);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({'result':mul}));
});

router.get('/div/:n1/:n2', function(req, res) {
	var div = parseInt(req.params.n1) / parseInt(req.params.n2);
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify({'result':div}));
});

console.log("System");

module.exports = router;
