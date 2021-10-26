const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort((a, b) => b.date.getTime() - a.date.getTime());
console.log(months);