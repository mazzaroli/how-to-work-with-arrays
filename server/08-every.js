const array = [1,3,5,10,41];

let rta = true;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element >= 40) {
        rta = false 
    }
}

console.log('for', rta)

// Metodo Every

const rta2 = array.every(item => item <= 40)
console.log('every', rta2)
