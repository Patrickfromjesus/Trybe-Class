import { Discipline, Student } from '../../src';

export const disciplines: Discipline[] = [
  {
    name: 'Matemática',
    grade: 0.7,
  },
  {
    name: 'Português',
    grade: 0.5,
  },
  {
    name: 'Português',
    grade: 0.9,
  },
  {
    name: 'Português',
    grade: 0,
  },
];

export const disciplinesWithLetters: Discipline[] = [
  {
    name: 'Matemática',
    grade: 0.7,
    letterGrade: 'C',
  },
  {
    name: 'Português',
    grade: 0.5,
    letterGrade: 'E',
  },
  {
    name: 'Português',
    grade: 0.9,
    letterGrade: 'A',
  },
  {
    name: 'Português',
    grade: 0,
    letterGrade: 'F',
  },
];

const school = { name: 'School1', average: 0.7 };

export const students: Student = {
  name: 'Student1',
  disciplines,
  school,
};