const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Book = require('../models/book')
const Author = require('../models/author')
const book = require('../models/book')
const uploadPath = path.join('public', Book.coverImageBasePath)
const imageMineTypes = ['image/jpeg', 'image/png', 'image/gif']
const upload = multer({
    dest: uploadPath,
    fileFilter: (req, file, callback) => {
        callback(null, imageMineTypes.includes(file.mimetype))
    }
})

// All Books Route
router.get('/', async (req, res) => {
    //print the time before searching
    timeStart = Date.now();
    console.log(timeStart);
    let query = Book.find()
    if (req.query.title != null && req.query.title != '') {
        query = query.regex('title', new RegExp(req.query.title, 'i'))
    }
    if (req.query.PublishedBefore != null && req.query.PublishedBefore != '') {
        query = query.lte('publishDate', req.query.PublishedBefore)
    }
    if (req.query.PublishedAfter != null && req.query.PublishedAfter != '') {
        query = query.gte('publishDate', req.query.PublishedAfter)
    }
    try {
        const books = await query.exec()
        res.render('books/index', {
                books: books,
                searchOptions: req.query
            })
        //print the time after searching 
		timeEnd = Date.now();
		console.log(timeEnd);

		//print the time taken for the search
		console.log(timeEnd-timeStart);
    } catch {
        res.redirect('/')
    }  
})

router.get('/moderator', async (req, res) => {
    try {
        const books = await Book.find()
        res.render('books/moderator', {
                books: books,
                searchOptions: req.query
            })
    } catch{
        res.redirect('/')
    }  
})
// New Book Route
router.get('/new', async (req, res) => {
    renderNewPage(res, new Book())
})

// Create Book Route
router.post('/', upload.single('cover'), async (req, res) => {
    const fileName = req.file != null ? req.file.filename : null
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publishDate: new Date(req.body.publishDate),
        pageCount: req.body.pageCount,
        coverImageName: fileName,
        description: req.body.description
    })

    try {
        const newBook = await book.save()
        // res.redirect(`books/${newBook.id}`)
        res.redirect(`books`)
    } catch {
        if (book.coverImageName != null) {
            removeBookCover(book.coverImageName)
        }
        renderNewPage(res, book, true)
    }
})

function removeBookCover(fileName) {
    fs.unlink(path.join(uploadPath, fileName), err => {
        if (err) console.err(err)
    })
}

async function renderNewPage(res, book, hasError = false) {
    try {
        const authors = await Author.find({})
        const params = {
            authors: authors,
            book: book
        }
        if (hasError) params.errorMessage = 'Error Creating Submission'
        res.render('books/new', params)
    } catch {
        res.redirect('/books')
    }
}

module.exports = router