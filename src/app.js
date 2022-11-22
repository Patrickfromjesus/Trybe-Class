const express = require('express');

const User = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);
app.get('/user/search/:id', User.getByIdAndEmail);
app.get('/user/:id', User.getById);
app.put('/user/:id', User.updateUser);
app.post('/user', User.createUser);
app.delete('/user/:id', User.deleteUser);

module.exports = app;