const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
	console.log("listening on " + PORT);
});

app.get('/', (req, res) =>{
<<<<<<< HEAD
	res.send({ok: false});
})
=======
	res.send({ok: true});
})
>>>>>>> 383f28846dc81b879cf091541d5a37e8a5a0b0f1
