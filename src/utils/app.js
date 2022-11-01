const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { getAllChocolates, readCacauTrybeFile } = require('../cacauTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  try {
    const chocolates = await getAllChocolates();
    res.status(200).json({ chocolates });
  } catch(error) {
    res.status(500).send({ message: error.message });
  }
});

app.post('/chocolates', async (req, res) => {
  try {
    const cacau = await readCacauTrybeFile();
    const { name, brandId } = req.body;
    const newCacau = { brands: [...cacau.brands], chocolates: [...cacau.chocolates, { id: cacau.chocolates.length + 1, name, brandId }] };
    await fs.writeFile(path.resolve(__dirname, '../files/cacauTrybeFiles.json'), JSON.stringify(newCacau));
    res.status(201).json({ name, brandId });
  } catch (error) {
    res.send({ message: error.message });
  }
});

module.exports = app;
