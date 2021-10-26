// // Metodo For
// const letters = ['a','b','c'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
// console.log('original', letters)
// console.log('new', newArray)

// Metodo Map
const letters = ['a','b','c'];
const newArray = letters.map(item => item + '++')

console.log('original', letters)
console.log('new', newArray)

// const array = [{age: 1}, {age:2}]; 
// const rta = array.map(item => {   
//   item.name = 'My name';
//   return item; 
// })

// console.log(array)
// console.log(rta)