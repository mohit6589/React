// Objects

const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy',
    price : 10000,
    colors : ['Black', 'Red', 'Blue', 'Green'],
};
console.log(smartphone.colors[1]);

smartphone.colors.push('Pink');
console.log(smartphone.colors);

smartphone.colors.splice(0, 1, 'Gray');
console.log(smartphone.colors);

smartphone.colors[0] = 'Violet';
console.log(smartphone.colors);

