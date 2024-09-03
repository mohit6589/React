// JS functions

function addNum(a, b){
    var c = a + b;
    console.log(c);
}

addNum(50, 100);
//console.log(c);

console.log("--------")

const getAvg = function(m1, m2, m3){
    const avg = (m1+m2+m3)/3;
    //console.log(avg)
    return avg;
}
const result = getAvg(20, 30, 40);
console.log(result)

console.log("--------")

const fact = (n) => {
    let f = 1;
    for(let i=1; i<=n; i++)
    {
        f *= i;
    }
    return f;
}

let ans = fact(5);
console.log(ans);

console.log("--------")

// WAP to check number is prime or not

let num = 17;
let prime = true;
for(let i=2; i<num; i++)
{
    if(num%i === 0){
        console.log('Number is not Prime');
        prime = false;
        break;
    }
}
if(prime)
{
    console.log('Number is Prime')
}

console.log("--------")

// Array








