var express = require('express');
var router = express.Router();
const Applicant = require('../models/applicant.js');
const json2csv = require('json2csv').parse;
const path = require('path')
const fs = require('fs');

router.post('/event/post', function(req, res, next) {
	const app = new Applicant({
		name: req.body.name,
		gender: req.body.gender,
		birth: req.body.birth,
		country: req.body.country,
		city: req.body.city,
		school: req.body.school,
		major: req.body.major,
		email: req.body.email,
		teamname: req.body.teamname,
		size: req.body.size,
		preference: req.body.preference,
		memone: req.body.memone,
		memtwo: req.body.memtwo,
		memthree: req.body.memthree,
		memfour: req.body.memfour,
		memfive: req.body.memfive,
		memsix: req.body.memsix,
		memseven: req.body.memseven,
		memeight: req.body.memeight,
		timezone: req.body.timezone,
		source: req.body.source
	});

	console.log(app)

	app.save(function (err, response) {
		if (err) {
			console.log("place for error\n");
			res.err(err);
		}
		else {
			console.log("saved ", response);
			res.status(200).json(req.body.name);
		}
	});
});

router.get('/list', function(req, res, next) {
	Applicant.find(function(err, apps){
		if(err) return res.status(500).send({error: 'database failure'});
		return res.json(apps);
	});
})



router.get('/download', function(req, res, next) {
	Applicant.find(function (err, apps) {
		if (err) {
			console.log("error point 1 :\n", err)
			return res.status(500).json({ err });
		}
		else {
			let csv;
			let list = [];
			for (var i = 0; i < apps.length; i++) {
				var item = new Object();
			    // name, gender, birth, country, city, school, major, email, 
			    // teamname, size, preference, memone, memtwo, memthree, memfour
			    // memfive, memsix, memseven, memeight, timezone, source
				item.index = i+1;
				item.name = apps[i].name;
				item.gender = apps[i].gender;
				item.birthdate = apps[i].birth;
				item.country = apps[i].country;
				item.city = apps[i].city;
				item.school = apps[i].school;
				item.major = apps[i].major;
				item.email = apps[i].email;
				item.teamname = apps[i].teamname;
				item.size = apps[i].size;
				item.preference = apps[i].preference;
				item.member1 = apps[i].memone;
				item.member2 = apps[i].memtwo;
				item.member3 = apps[i].memthree;
				item.member4 = apps[i].memfour;
				item.member5 = apps[i].memfive;
				item.member6 = apps[i].memsix;
				item.member7 = apps[i].memseven;
				item.member8 = apps[i].memeight;
				item.timezone = apps[i].timezone;
				item.source = apps[i].source;
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
