const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

app.get('/', (req, res) =>{
<<<<<<< HEAD
	res.send({ok: false, text: "toyota"});
=======
	res.send({ok: false, text: "benz"});
>>>>>>> c49a8ba1d1ca9c6085e3d315bc2aa24a055a479c
})