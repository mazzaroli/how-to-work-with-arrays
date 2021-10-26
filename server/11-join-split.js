const elements = ['fire','air','water'];

let rtaFinal = ''
const separator = '--';

for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

// Metodo Join
const rta2 = elements.join('--')

console.log('for', rtaFinal)
console.log('join', rta2)

// 

const title = 'Curso de manipulacion de arrays';


const urlFinal = title.split(' ').join('-').toLocaleLowerCase()
console.log(urlFinal)