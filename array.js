// Array
// Array can store more than on data (Multiple data types)

const myarr = [123, 'good', true, console.log];
console.log(myarr)
console.log(typeof myarr)
console.log(Array.isArray(myarr))   // To check that Array or not
console.log(myarr.length)  // To check the length of Array

const movies = ['Bad News','Stree 2','Avengers','Kill','Predestination'];
console.log(movies[2])    // For index number
console.log(movies[4])   // For index number
console.log(movies.at(-3))    // get index from last 
console.log(movies.at(1))

movies[4] = 'Mohit';     // if you want to change single element in array
console.log(movies)

// Slicing        //  If we want to acccess array with indexing
console.log(movies.slice(0, 5))
console.log(movies.slice(-2))
console.log(movies.slice(3, 5))
console.log(movies.slice())

// Adding and Removing Array (Push and Unsshift, Pop and Shift)
movies.push('Deadpool', 'Sarthak')  // For addding element in array in last index
movies.unshift('Deadpool', 'Sarthak') // For adding element in array in zero index
console.log(movies)

movies.pop();  // Remove from last element
console.log(movies)
movies.shift();  // Remove from first element
console.log(movies)

movies.splice(2,2)  // Removes 2 element starting from index 2 ( it will remove itself and next element)
console.log(movies)

movies.splice(2, 0, 'Kalki', 'OMG', 'DIGI');  // It will remove and insert element
console.log(movies)

console.log("_________")





