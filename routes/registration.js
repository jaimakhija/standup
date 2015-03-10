var express = require('express');
var router = express.Router();
var register = require('../model/register');

router.get('*', function(req, res){
	res.send("This works");
});

router.get('/standup', function(req, res){
	res.sendfile('./public/index.html');
});

router.post('/standup/register', function(req, res){
	var db = req.db;
	
	//Getting the variables
	var cname = req.body.cname;
	var email = req.body.email;
	var admin = req.body.admin;
	var password = req.body.password;

	register.company(db, cname, email, password, admin);
	
})

module.exports = router;