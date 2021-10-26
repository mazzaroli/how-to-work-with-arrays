const team = [
    {
      name: "Nicolas",
      age: 1,
    },
    {
      name: "Andrea",
      age: 1,
    },
    {
      name: "Zulema",
      age: 13,
    },
    {
      name: "Santiago",
      age: 15,
    },
  ];

let rta = team.every(item => item.age < 15);

console.log('pueden jugar?', rta)
