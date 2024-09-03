const nums = [2, 3, 4, 5, 6, 7];

const cubes = [];

nums.forEach((n) => {    // Traversal of element like a loop and print cubes and store in a new array using push 
    cubes.push(n ** 3)
});
console.log(cubes);

console.log('___________________');

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const even = [];
nums2.forEach(( n ) => {    // Printing even numbers and storing in a new array
    if ( n % 2 === 0) {
        even.push(n)
    }
});
console.log(even);

console.log('___________________');
// Map Function
const newNums = nums2.map( ( n ) => { return  n ** 3 } );
console.log(newNums);
console.log('___________________');

const price = [100, 200, 300, 400, 500, 600];
const taxPrice = price.map( ( n ) => { return n + n * 0.18 } );
console.log(taxPrice);

console.log('___________________');
const price2 = ['$100.00', '$200.00', '$300.00', '$400.00'];
const newPrice = price2.map( (p) => { 
    return parseInt(p.slice(1)) 
});
console.log(newPrice);

console.log('___________________');
// Filter Function
const newNums2 = nums2.filter( ( n ) => { return n%2===0 } );
console.log(newNums2);

console.log('___________________');
const names1 = ['Sarthak','Om','Maqs','Abhishek', 'Mohit Srivastava'];  // Using Filter
const newName1 = names1.filter( ( n ) => { return n.length>=5 } );
console.log(newName1);
console.log('___________________');
const names2 = ['Sarthak','Om','Maqs','Abhishek', 'Mohit Srivastava'];  // Using Map
const newName2 = names2.map( ( n ) => { return n.length>=5 } );
console.log(newName2);
console.log('___________________');

const nums3 = [2, 3, 7, 9, 16, 18, 36];
const perNum = nums3.filter( ( n ) => { return Number.isInteger( n ** 0.5 ) } ); // Get Cubes of all element
console.log(perNum);
console.log('___________________');

const newName3 = names2.filter( ( n ) => { return n.toLowerCase().includes('o') } );  // Get all name including 'Any' Character
console.log(newName3);







