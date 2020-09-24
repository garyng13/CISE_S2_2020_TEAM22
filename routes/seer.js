const express = require('express');
const router = express.Router();
const Seer = require('../models/seer');

router.get('/', async(req, res)=>{
	try{
		const seer = await Seer.find();
		res.json(seer);
	}catch(err){
		res.send('Error' + err);
	}

});

router.get('/:id', async(req, res)=>{
	try{
		const seer = await Seer.findById(req.params.id);
		res.json(seer);
	}catch(err){
		res.send('Error' + err);
	}

});

router.post('/', async(req, res)=>{

	let author = req.body.author;
    let url = req.body.url;
	let rating = req.body.rating;
	console.log(author);
	console.log(url);
	console.log(rating);
	const seer = new Seer({
		author: author,
		url: url,
		rating:rating
	});

	try{
		const s1 = await seer.save();
		res.json(s1);
	}catch(err){
		res.send('Error' + err);
	}
});

	router.patch('/:id', async(req, res)=>{
	try{
		const seer = await Seer.findById(req.params.id);
		seer.rating = req.body.rating;
		const r1 = await seer.save();
		res.json(r1);
	}catch(err){
		res.send('Error');
	}
});

router.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!');
  console.log(req.body);
})
module.exports = router;