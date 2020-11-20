var express = require('express');
var router = express.Router();
const Subscriber = require('../models/subscriber.js');
const json2csv = require('json2csv').parse;
const path = require('path')
const fs = require('fs');

router.post('/post', function(req, res, next) {
	console.log(req.body);
	const sub = new Subscriber({
		email: req.body.email,
	});

	sub.save(function (err, response) {
		if (err) {
			console.log("place for error\n");
			res.err(err);
		}
		else {
			console.log("saved ", response);
			res.json(req.body.email);
		}
	});
});

router.get('/list', function(req, res, next) {
	Subscriber.find(function(err, subs){
		if(err) return res.status(500).send({error: 'database failure'});
		return res.json(subs);
	});
})



router.get('/download', function(req, res, next) {
	console.log("hi?");
	
	Subscriber.find(function (err, subs) {
		if (err) {
			console.log("error point 1 :\n", err)
			return res.status(500).json({ err });
		}
		else {
			let csv;
			let list = [];
			for (var i = 0; i < subs.length; i++) {
				var item = new Object();
				item.index = i+1;
				item.email = subs[i].email;
				list.push(item)
			}
			console.log(list)
			try {
				res.status(200).send(list);
			} catch (err) {
				console.log("error point 2 : ", err);
				return res.status(500).json({ err });
			}
			// try {
			// 	csv = json2csv({data: JSON.stringify(list), fields: ["index","email"]});
			// } catch (err) {
			// 	console.log("error point 2 :\n", err)
			// 	return res.status(500).json({ err });
			// }
			// const filePath = path.join(__dirname, "../../frontend/", "public", "exports", "list.csv")
			// fs.writeFile(filePath, csv, function (err) {
			// 	if (err) {
			// 		console.log("error point 3 :\n", err)
			// 		return res.json(err).status(500);
			// 	}
			// 	else {
			// 		console.log("file is written\n");
			// 	    const fileName = "list.csv";
			// 		res.status(200).send(fileName);
			// 	}
			// });
		}
	})
})


// router.get('/download', function(req, res, next) {
// 	console.log(download);

// })



module.exports = router;
