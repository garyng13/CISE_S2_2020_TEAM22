const mongoose = require('mongoose');

//second trial to connect to cloud based mongodb
const url = 'mongodb+srv://dbUser:GaryAut2020@cluster0.npid8.mongodb.net/seer?retryWrites=true&w=majority';

const connectDB = async () =>{
	await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
	console.log('cloud mongodb is connected...')
};

module.exports = connectDB;