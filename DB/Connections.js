const config = require('../config.js');

const mongoose = require('mongoose');

//second trial to connect to cloud based mongodb
//const url = 'mongodb+srv://dbUser:'+config.KEY+'@cluster0.npid8.mongodb.net/seer?retryWrites=true&w=majority';

const url = process.env.url;

const connectDB = async () =>{
	await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
	console.log('cloud mongodb is connected...')
};

module.exports = connectDB;