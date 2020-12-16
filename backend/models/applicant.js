const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    // name, gender, birth, country, city, school, major, email, 
    // teamname, size, preference, memone, memtwo, memthree, memfour
    // memfive, memsix, memseven, memeight, timezone, source
	_uid: Schema.Types.ObjectId,
	name: String,
	gender: String,
	birth: String,
	country: String,
	city: String,
	school: String,
	major: String,
	email: String,
	teamname: String,
	size: Number,
	preference: String,
	memone: String,
	memtwo: String,
	memthree: String,
	memfour: String,
	memfive: String,
	memsix: String,
	memseven: String,
	memeight: String,
	timezone: String,
	source: String
});

global.Applicant = global.Applicant || mongoose.model('applicant', applicantSchema);
module.exports = global.Applicant
