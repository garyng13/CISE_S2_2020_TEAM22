const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = 'mongodb://localhost/seer'
const PORT = process.env.PORT || 5000;

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', function(){
	console.log('mongodb is connected...')
})

app.use(express.json());

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

const seerRouter = require('./routes/seer');
app.use('/seer', seerRouter);

app.get('/', (req, res) =>{
	res.sendfile('public/index.html')
});
app.get('/search.html', (req, res) =>{
	res.sendfile('public/search.html')
});