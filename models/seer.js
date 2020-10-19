//INITIAL TEST schema for database

const mongoose = require('mongoose');

const seerSchema = new mongoose.Schema({

	author:{
		type: String,
		required: true
	},

	url:{
		type: String,
		required: true
	},

	rating:{
		type: Number
	}
});

module.exports = mongoose.model('Seer', seerSchema);