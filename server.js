const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

app.get('/', (req, res) =>{
	res.send({ok: false, text: "hello world", text1:"i love car", text2:"programming", "text4": "UK"});
})