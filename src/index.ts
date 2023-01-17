export type Discipline = {
  name: string;
  grade: number;
  letterGrade?: string;
};

export type School = {
  name: string;
  average: number;
}

export type Student = {
  name: string;
  disciplines: Discipline[];
  school: School;
};

const studentsx: Student[] = [
  {
    name: 'Lee',
    disciplines: [
      { name: 'Geografia', grade: 0.8 },
      { name: 'História', grade: 0.6 },
    ],
    school: { name: 'Integral', average: 0.8 },
  },
  {
    name: 'Clementine',
    disciplines: [
      { name: 'Matemática', grade: 0.8 },
      { name: 'História', grade: 0.9 },
    ],
    school: { name: 'EPCAr', average: 0.6 },
  },
  {
    name: 'Joel',
    disciplines: [
      { name: 'Matemática', grade: 0.7 },
      { name: 'Física', grade: 1 },
    ],
    school: { name: 'ITA', average: 0.7 },
  },
];

/* "Converter" */
const percentageGradesIntoLetters = ({ name, disciplines, school }: Student): Student => ({
  name,
  disciplines: disciplines.map(({ name: studentName, grade }) => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const grades = [0.9, 0.8, 0.7, 0.6, 0.1];
    const gradesFiltered = grades.map((nota) => (grade >= nota));
    const index = gradesFiltered.indexOf(true);
    const letterGrade = letters[index] || 'F';
    return { name: studentName, grade, letterGrade };
  }),
  school,
});

/* "Determinar" */
const approvedStudents = ({ disciplines, school }: Student): boolean =>
  disciplines.every(
    ({ grade }) => grade >= school.average,
  );

/* "Atualizar" */
const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
  console.log(`A pessoa com nome ${studentName} foi aprovada!`);

  disciplines.map(({ name, letterGrade }) =>
    console.log(`${name}: ${letterGrade}`));
};

function setApproved(students: Student[]): void {
  students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

setApproved(studentsx);

/*
  Não se esqueça que é necessário exportar ao final as funções para que você
  possa testá-las
*/
export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};