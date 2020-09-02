const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

app.get('/', (req, res) =>{
	res.sendfile('public/index.html');
});

app.get('/', (req, res) =>{
	res.sendfile('public/mystyle.css');
});

app.get('/', (req, res) =>{
	res.sendfile('public/search.html');
});