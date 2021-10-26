const products = [
  {title: "Pizza", price: 121, id: "🍕"},  
  { name: "Burger", price: 121, id: '🍔' },
  { name: "Hot cakes", price: 121, id: '🥞' },
];

const newProducts = products.filter(item => item.id !== '🍕');

console.log(newProducts);

