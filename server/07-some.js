
const array = [1,3,5,10];

let rta = false;
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  if (element % 2 === 0) {
    rta = true;
    break;
  }
}

console.log(rta)

// Metodo Some

const rta2 = array.some(item => item % 2 === 0);
console.log('rta 2',rta2)

// Ejemplo 2

const orders = [
  {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
  },
  {
      customerName: "Zulema",
      total: 120,
      delivered: false,
  },
  {
      customerName: "Santiago",
      total: 180,
      delivered: true,
  },
  {
      customerName: "Valentina",
      total: 240,
      delivered: true,
  },
];

const rta3 = orders.some(item => item.delivered);
console.log('rta 3',rta3)

// Ejemplo 3
const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 19),
  endDate: new Date(2021, 1, 1, 20),
};

var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverLap = (newDate) => {
  return dates.some(date => {
    return areIntervalsOverlapping(
      {start: date.startDate, end: date.endDate},
      {start: newDate.startDate, end: newDate.endDate}
    );
  });
};

console.log('is over lap:',isOverLap(newAppointment))