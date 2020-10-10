const express = require('express');
const router = express.Router();
const Seer = require('../models/seer');

// route for get database
router.get('/', async(req, res)=>{
	try{
		const seer = await Seer.find();
		res.json(seer);
	}catch(err){
		res.send('Error' + err);
	}

});

/*// route for getting particular id from database
router.get('/:id', async(req, res)=>{
	try{
		const seer = await Seer.findById(req.params.id);
		res.json(seer);
	}catch(err){
		res.send('Error' + err);
	}

});
*/

// route for getting particular id from database
router.post('/search', async(req, res)=>{
	let author = req.body.author;
    let url = req.body.url;
	let rating = req.body.rating;
	console.log(author);
	console.log(url);
	console.log(rating);
	try{
		// If (url or rating is empty)
		// const seer = await Seer.find({author : author});
		
		const seer = await Seer.find({author : author, url:url, rating:rating});
		console.log(seer);
		//console.log(seer[0].author);

		//need to loop through the json object and get author, url and rating
		const authors = [];
		const urls =[];
		const ratings = [];

		//loop through the json object returned from mongoDB and push it into the arrays
		for (var i = 0; i <seer.length ; i++){
			authors.push(seer[i].author);
			urls.push(seer[i].url);
			ratings.push(seer[i].rating);
		}

		/*
		const authorReturn = seer[0].author;
		const urlReturn = seer[0].url;
		const ratingReturn = seer[0].rating;
		*/

		//render html with the search results. FAILED to loop through the results, only one resutlt is displayed 
		//right now
		res.set('Content-Type', 'text/html')
		if(authors != null){
			for(var i = 0; i < authors.length; i++) {
				console.log(authors.length)
				res.send(Buffer.from('<p>' + authors[i] + '</p>' + '<p>' + urls[i] + '</p>' + '<p>' + ratings[i] + '</p>'))
			}
		}else{
		res.send(Buffer.from('<p>There is no results</p>'
		))
		}

		/*
		//res.json(seer);
		res.set('Content-Type', 'text/html')
		res.send(Buffer.from('<p>' + authorReturn + '</p>'
		+ '<p>' + urlReturn + '</p>'
		+ '<p>' + ratingReturn + '</p>'
		)) //
		*/
	}catch(err){
		res.send('Error' + err);
	}

});

// route for posting 
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

// route for update database
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

module.exports = router;