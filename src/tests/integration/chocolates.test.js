const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs').promises;
const app = require('../../utils/app');

chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  
  describe('Usando o método GET em /chocolates', function () {
    it('1. Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates'); //se for um método que envia algo (body ou params ou query), deve-se acrescentar o .send(body, params ou query).
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
    
    it('2. Adiciona um item à lista', async function () {
      const newChoco = {
        name: 'Suflayr',
        brandId: 1,
      };

      const response = await chai
        .request(app)
        .post('/chocolates')
        .send(newChoco);
      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal(newChoco);
    });
  });
});
