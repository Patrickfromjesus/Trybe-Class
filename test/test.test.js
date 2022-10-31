const { expect } = require('chai');
const printThis = require('../index');

describe('Test the console', function () {
  it('print correctly', function () {
    expect(printThis('patrick')).to.be.equals('olloco');
  });
});