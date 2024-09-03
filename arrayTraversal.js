// Array Traversal
const nums = [2, 5, 1, 4, 9, 3];
for(let i=0; i<nums.length; i++)
{
    console.log(nums[i] ** 2)
}

console.log("__________________")
for(let n of nums)
{
    console.log(n)
}

console.log("__________________")

// JS Callback
nums.forEach( ( a , i ) =>{      // Traversal of element like a loop 
        console.log(a, i);  
    });

console.log('__________________')
//Print all even numbers
nums.forEach( ( a, i, arr ) =>{ // Traversal of element like a loop 
    if(a % 2 === 0)
    {
    console.log(a, i, arr);  
    }
});

console.log('__________________')


