import 'mocha';
import { expect } from 'chai';
import { approvedStudents } from '../../src';

describe('Testes', function () {
  describe('teste da função approvedStudents quando', function () {
    it('Todas as notas são menores que 0.7', function () {
      const disciplines = [
        { name: 'Matemática', grade: 0.5 },
        { name: 'Português', grade: 0.6 },
      ];
      const school = { name: 'Integral', average: 0.8 };
      const student = {
        name: "test",
        disciplines: disciplines,
        school,
      };
      const result = approvedStudents(student);
      expect(result).to.be.equal(false);
    });

    it('Todas as notas são maiores que 0.7', function () {
      const disciplines = [
        { name: 'Matemática', grade: 0.8 },
        { name: 'Português', grade: 0.9 },
      ];
      const school = { name: 'Integral', average: 0.7 };

      const student = {
        name: "test",
        disciplines: disciplines,
        school,
      };
      const result = approvedStudents(student);
      expect(result).to.be.equal(true);
    });

    it('Algumas notas são maiores que 0.7', function () {
      const disciplines = [
        { name: 'Matemática', grade: 0.5 },
        { name: 'Português', grade: 0.9 },
      ];
      const school = { name: 'Integral', average: 0.6 };
      const student = {
        name: "test",
        disciplines: disciplines,
        school,
      };
      const result = approvedStudents(student);
      expect(result).to.be.equal(false);
    });
  });
});
