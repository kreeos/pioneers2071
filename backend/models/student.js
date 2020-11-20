const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
	_uid: Schema.Types.ObjectId,
	type: Number, //0 for post doct, 1 for phd cand, 2 for ms cand, 3 for undergrad
	name: String,
	education: [String, String, String], //PHD, MS, BS
	field: String,
	email: String,
	image: String
});

global.Student = global.Student || mongoose.model('student', studentSchema);
module.exports = global.Student

