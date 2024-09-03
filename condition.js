//For single condition
let age = 19
if(age >= 18)
{
    console.log("Please vote!")
} else {
    console.log("Dont vote!")
}

//For multiple condition
let mark = 30
if(mark >= 40)
{
    console.log("A++")
} else if(mark >= 35 ) {
    console.log("B++")
} else {
    console.log("Fail")
}

// Vowel or not
let char = "e"
if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
{
    console.log("Is vowel!")
} else  {
    console.log("Not")
}

// Vowel or not
let num = 10
if(num % 2 == 0 )
{
    console.log("Number is even")
} else  {
    console.log("Number is odd")
}

// ternary operator

let a = 20
let result = (a >= 19) ? "You are eligible" : "You are not eligible"
console.log(result)

