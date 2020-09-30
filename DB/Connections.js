const config = require('../config.js');

const mongoose = require('mongoose');

//url to connect mongodb Atlas
//const url = process.env.MONGO_URL ||'mongodb+srv://dbUser:'+config.KEY+'@cluster0.npid8.mongodb.net/seer?retryWrites=true&w=majority';


const url = "mongodb://localhost:27017/seer";
//const url = process.env.url;

const connectDB = async () =>{
	await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
	console.log('cloud mongodb is connected...')
};

module.exports = connectDB;