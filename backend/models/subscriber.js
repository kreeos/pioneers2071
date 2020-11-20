const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
	_uid: Schema.Types.ObjectId,
	email: String
});

global.Subscriber = global.Subscriber || mongoose.model('subscriber', subscriberSchema);
module.exports = global.Subscriber
