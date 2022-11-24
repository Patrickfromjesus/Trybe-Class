const express = require('express');
const employeeController = require('./Controllers/employeeController');
const addressControler = require('./Controllers/addressController');

const app = express();

app.use(express.json());

app.get('/employees', employeeController.getAllEmployees);
app.get('/addresses', addressControler.getAll);
app.get('/employees/:id', employeeController.getById);

module.exports = app;
