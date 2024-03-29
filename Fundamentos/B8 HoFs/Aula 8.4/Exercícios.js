// const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// const flatten = (array) => array.flat();

// console.log(flatten(arrays));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// const reduceNames = (arr) =>
//   arr.map((element) => element.author.name).join(', ');
const reduceNames = (arr) =>
  arr.reduce((acc, curr) => {
    !acc.author.name ? (acc.author.name = '') : acc.author.name;
    acc.author.name += ', ' + curr.author.name;
    return acc;
  }).author.name;

console.log(reduceNames(books));

// const averageAge = (arr) => {
//   const sumOfAges = arr.reduce(
//     (acc, curr) => {
//       Object.keys(acc).includes('count') ? acc.count++ : (acc.count = 1);
//       acc.age += curr.releaseYear - curr.author.birthYear;
//       return acc;
//     },
//     { age: 0 }
//   );
//   console.log(sumOfAges);
//   return sumOfAges.age / sumOfAges.count;
// };

// console.log(averageAge(books));

// const longestNamedBook = (arr) =>
//   arr.reduce((acc, curr) => {
//     acc.name.length < curr.name.length ? (acc = curr) : acc;
//     return acc;
//   });
// // longestNamedBook(books);
// console.log(longestNamedBook(books));

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

const containsA = (arr) => {
  return arr.reduce(
    //acc é só um elemento sem ligação direta com o que estamos iterando, curr é algo da lista que estamos passando por
    (acc, currWord) =>
      acc +
      currWord.split('').reduce((accu, currLetter) => {
        // mesma coisa aqui, reduce só funciona em arrays, split transforma pra array
        currLetter === 'A' || currLetter === 'a' ? (accu += 1) : accu;
        return accu;
      }, 0),
    0
  );
};

console.log(containsA(names));

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = (studentsArr, gradesArr) =>
  studentsArr.map((student, index) => ({
    name: student,
    average:
      gradesArr[index].reduce((acc, curr) => acc + curr, 0) /
      gradesArr[index].length,
  }));

console.log(studentAverage(students, grades));
// const expected = [
//   { name: 'Pedro Henrique', average: 7.8 },
//   { name: 'Miguel', average: 9.2 },
//   { name: 'Maria Clara', average: 8.8 },
// ];

// const containsA = (arr) => {
//   return arr.reduce(
//     //acc é só um elemento sem ligação direta com o que estamos iterando, curr é algo da lista que estamos passando por
//     (acc, currWord) =>
//       acc +
//       currWord.split('').reduce((accu, currLetter) => {
//         // mesma coisa aqui, reduce só funciona em arrays, split transforma pra array
//         currLetter === 'A' || currLetter === 'a' ? (accu += 1) : accu;
//         return accu;
//       }, 0),
//     0
//   );
// };

// console.log(containsA(names));

// const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// const grades = [
//   [9, 8, 10, 7, 5],
//   [10, 9, 9, 10, 8],
//   [10, 7, 10, 8, 9],
// ];

// const studentAverage = (studentsArr, gradesArr) => {
//   return (nameAndAverage = studentsArr.map((student, index) => ({
//     name: student,
//     average:
//       grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
//   })));
// };

// console.log(studentAverage(students, grades));
// // const expected = [
// //   { name: 'Pedro Henrique', average: 7.8 },
// //   { name: 'Miguel', average: 9.2 },
// //   { name: 'Maria Clara', average: 8.8 },
// // ];
