const Joi = require("joi");
const books = require("../books.js");

// GET METHOD
const getBooksPage = (req, res) => {
    res.json(books);
}

// GET BOOK from ID
const getBook = (req, res) => {
    const book = books.find(e => e.id === parseInt(req.params.id));
    if(!book){
        res.status(404).send(`Siz kiritgan ${req.params.id} id boyicha kitob yoq!`);
    }
    res.json(book);
}

// POST Method
const postBook = (req, res) => {
    // const schema = Joi.object({
    //     name:Joi
    //     .string()
    //     .required()
    //     .min(5)
    //     .max(20) 
    // });
    
    const {error} = validateBook(req.body);
    if(error) 
        res.status(400).send(error.details[0].message);

    const book = {
        id: books.length + 1,
        name: req.body.name
    }
    books.push(book);
    res.status(201).send(books);
}


// PUT METHOD
const updateBook = (req, res) => {
    const book = books.find(e => e.id === parseInt(req.params.id));
    if(!book){
        res.status(404).send(`Siz kiritgan ${req.params.id} id boyicha kitob yoq!`);
    }
    const {error} = validateBook(req.body);
    if(error) 
        res.status(404).send(error.details[0].message);
    
    book.name = req.body.name;
    res.json(book);

}

//DELETE METHOD
const deleteBook = (req, res) => {
    const book = books.find(e => e.id === parseInt(req.params.id));
    if(!book)
        res.status(404).send(`Siz kiritgan ${req.params.id} id boyicha kitob yoq!`);
    
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.json(book);
}

//Validator
function validateBook(book) {
    const schema = Joi.object({
        name:Joi
        .string()
        .required()
        .min(5)
        .max(20) 
    });
    return schema.validate(book);
}


module.exports = {
    getBooksPage,
    postBook,
    getBook,
    updateBook,
    deleteBook
};
