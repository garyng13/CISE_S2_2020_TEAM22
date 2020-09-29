const express = require('express');
const app = express();
const connectDB = require('./DB/Connections');
//first trial to connect to localhost/seer
//const url = 'mongodb://localhost/seer'


const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')

/*
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', function(){
	console.log('cloud mongodb is connected...');
})*/

connectDB();

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

const seerRouter = require('./routes/seer');

app.use('/seer', seerRouter);

app.use('/coffee', seerRouter);

app.get('/', (req, res) =>{
	res.sendfile('public/index.html')
});

app.get('/search.html', (req, res) =>{
	res.sendfile('public/search.html')
});