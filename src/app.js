const express = require('express');
const BookController = require('./Controllers/BookController');
const UserBookController = require('./Controllers/UserBookController');
const UserController = require('./Controllers/UserController');

const app = express();

app.use(express.json());

app.get('/books', BookController.getAll);
app.get('/users', UserController.getAll);
app.get('/users/books', UserBookController.getAll);

module.exports = app;
