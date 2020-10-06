const express = require('express');
const app = express();
const connectDB = require('./DB/Connections');
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser')

//connect to mongoDB Atlas 
connectDB();

//use Json parser
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//listen to port localhost 5000
app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

const seerRouter = require('./routes/seer');

app.use('/seer', seerRouter);

app.use('/coffee', seerRouter);

app.use(express.static(__dirname + '/public'));
/*
app.get('/', (req, res) =>{
	res.sendfile('public/index.html')
});

app.get('/search.html', (req, res) =>{
	res.sendfile('public/search.html')
});

app.get('/submit.html', (req, res) =>{
	res.sendfile('public/submit.html')
});*/