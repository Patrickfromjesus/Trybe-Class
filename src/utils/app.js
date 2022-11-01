const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const { getAllChocolates, readCacauTrybeFile, getAllBrands } = require('../cacauTrybe.js');

const app = express();

app.use(express.json());

/* app.get('/chocolates', async (_req, res) => {
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
}); */

app.get('/chocolates/brands', async (_req, res) => {
  try {
    const getBrands = await getAllBrands();
    res.status(200).json({ brands: getBrands });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const getChocos = await getAllChocolates();
    const chocolates = getChocos.filter(({ brandId }) => brandId === Number(id));
    res.status(200).json({ chocolates });
  } catch(err) {
    res.status(500).send({ message: err.message });
  }
});

app.post('/chocolates/brands', async (req, res) => {
  try {
    const getBrands = await getAllBrands();
    const getChocos =  await getAllChocolates();
    const { name } = req.body;
    const newBrand = { brands: [...getBrands, { id: getBrands.length + 1, name }], chocolates: getChocos };
    await fs.writeFile(path.resolve(__dirname, '../files/cacauTrybeFiles.json'), JSON.stringify(newBrand));
    res.status(201).json({ name });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = app;
