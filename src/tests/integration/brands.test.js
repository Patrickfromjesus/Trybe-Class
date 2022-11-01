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

describe('GET para brands', function () {
  beforeEach(function () {
    sinon.stub(fs, 'readFile').resolves(mockFile);
    /* sinon.stub(fs.promises, 'writeFile').resolves(mockFile); */
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('testes mockados', function () {

    it('1. sem params, retornando as brands, retornando 200', async function () {
      const brandsAll = [
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
      ];

      const response = await chai
        .request(app).get('/chocolates/brands');
      expect(response.status).to.be.equal(200);
      expect(response.body.brands).to.deep.equal(brandsAll);
    });

    it('2. com brandId igual a 1, retornar chocolates, retornando 200', async function () {
      const response = await chai
        .request(app).get('/chocolates/1');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
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
      ]);
    });

    it('3. Adiciona nova brand, retornando o body e 201', async function () {
      const newBrand = {
        name: 'Nestlé',
      }

      const response = await chai
        .request(app).post('/chocolates/brands')
        .send(newBrand);

      expect(response.status).to.be.equal(201);
      expect(response.body).to.deep.equal(newBrand);
    });

  });

});