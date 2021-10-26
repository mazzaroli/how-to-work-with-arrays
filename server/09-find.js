const array = [1,3,5,10,41];

let rta = undefined;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === 10) {
        rta = element;
        break
    }   
}

console.log('for',rta)

// Metodo find
const rta2 = array.find(item => item === 41)
console.log('find',rta2)

// Ejemplo 2

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
];

const rta3 = products.find(product => product.id === '🍔')
console.log('rta3',rta3)

// Find Index

const rta4 = products.findIndex(product => product.id === '🍔')
console.log('rta4',rta4)