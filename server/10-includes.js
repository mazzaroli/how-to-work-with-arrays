const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === 'bat') {
    includeInArray = true
  }
}

console.log(includeInArray)

// Metodo Includes
const rta = pets.includes('bat')
console.log('for',includeInArray)
console.log('includes',rta)
