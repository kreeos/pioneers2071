const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alumniSchema = new Schema({
	_uid: Schema.Types.ObjectId,
	name: String,
	education: [String, String, String],  //PHD, MS, BS
	current: String,
	topic: String,
	email: String
});

global.Alumni = global.Alumni || mongoose.model('alumni', alumniSchema);
module.exports = global.Alumni
