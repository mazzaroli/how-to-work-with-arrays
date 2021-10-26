// const matriz = [
//   [1,2,3],
//   [4,5,6,[20,40,[1213,4314241]]],
//   [7,8,[9,[2,[9,[10,[20,[90]]]]]]]
// ];

// const newArray = []
// for (let i = 0; i < matriz.length; i++) {
//   const array = matriz[i];
//   for (let j = 0; j < array.length; j++) {
//     const element = array[j];
//     if(Array.isArray(array[j])){
//       for (let z = 0; z < element.length; z++) {
//         const goku = element[z];
//         newArray.push(goku)
//       }
//     } else {
//       newArray.push(element)
//     }      
//   }
// }

// const rta = matriz.flat(10)

// console.log('for',newArray)
// console.log('flat',rta)



// // Metodo con Recursividad
// function profundidad(list) {
//   let newList = [];
//   if (typeof list != "object") return [list];
//   list.forEach(element => {
//       newList = newList.concat(profundidad(element));
//   });
//   return newList;
// }

// console.log('caca',profundidad(matriz))

const array = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array.flat();
console.log(rta)