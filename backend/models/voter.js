const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voterSchema = new Schema({
	_uid: Schema.Types.ObjectId,
	name: String,
	birth: String,
	email: String,
});

global.Voter = global.Voter || mongoose.model('voter', voterSchema);
module.exports = global.Voter
