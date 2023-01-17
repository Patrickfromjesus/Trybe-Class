import { expect } from 'chai';
import 'mocha';
import { percentageGradesIntoLetters } from '../../src';
import { disciplinesWithLetters, students } from '../helpers/studentsAndDisciplines';

describe('Testa função percentageGradesIntoLetters', function () {

  it ('Testa se faz a alteração corretamente.', function () {
    const estudante = students;
    const disciplines = disciplinesWithLetters;
    const result = percentageGradesIntoLetters(estudante);
    expect(result).to.be.deep.equal({ name: estudante.name, disciplines, school: estudante.school });
  });
});

