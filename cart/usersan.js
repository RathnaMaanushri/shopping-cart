var express = require('express');
var path =require('path');
var bodyParser = require('body-parser');
var sangee = require('./User.js');
var t=require('./Watches.js');
var app = express()
app.use('/routing',express.static(path.join(__dirname,'routing')))
app.use(express.static(__dirname));
console.log(__dirname)

app.use(bodyParser.urlencoded({ extended : false}))
app.use(bodyParser.json())
app.post('/pto', function(req,res) {
	sangee.find({"username":req.body.username},function(err,data){
		
		
		if(data.length ==0)
			return res.json({"message":"user not found"})
		
		else{
			return res.json(data);
		}
	})
})
app.get('/list', function (req, res) {
	t.find({},function(err,data){
		res.json(data);
		})
})

console.log("hi")
app.listen(8080)