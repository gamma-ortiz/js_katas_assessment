// KATA 01: Add

/* Write a function named "add" which takes two arguments (as input variables) and returns their sum.
 You may use built-in operators in order to finish this kata.
  For example, calling add(2, 4) should return a result of 6 
*/


function add(x, y) {
    return x + y
}

console.log('kata01:', add(5000, 100))
console.log('kata01:', add(1200, 2160))
console.log('kata01:', add(500, 3200))






//KATA 02: Multiply

/*Write a function named "multiply" which takes two arguments (as input variables) and returns their product.
You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.
For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:   6 + 6 + 6 + 6 = 24 
*/


function multiply(x, y) {
    let total = 0
    for (let index = 0; index < x; index += 1) {
        total = add(y, total)
    }
    return total
}
console.log('kata02:', multiply(5, 6))
console.log('kata02:', multiply(2, 4))
console.log('kata02:', multiply(10, 6))


//KATA 03: Power/Exponentiaton

/*
Write a function named "power" which takes two arguments ( x and n) and returns the the result of raising x to the nth power.
You may not use built-in math operators or functions (such as the * multiplication operator), or the ** operator for power/exponentiation). Instead, you will re-use functions you wrote in earlier katas to write this function.
For example, if we called power(2, 8), we should return 256 by multiplying 2 by itself 8 times:

2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 = 256
*/

function power(x, y) {
    let total = 1
    for (let index = 0; index < y; index += 1) {
        total = multiply(x, total)
    }
    return total
}
console.log('kata03:', power(2, 8))
console.log('kata03:', power(3, 5))
console.log('kata03:', power(11, 8))

// KATA 04: Factorial

/*
Write a function named "factorial" which takes a single argument and returns the factorial of that value.
You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will re-use functions you wrote in earlier katas to write this function.
A factorial multiplies a given number by every number below it. For example, "5 factorial" (usually symbolized by 5! in Mathematics) would be:      5 * 4 * 3 * 2 * 1 = 120
*/

function factorial(x) {
    let total = 1
    for (let index = 0; x > 1; x -= 1) {
        total = multiply(x, total)
    }
    return total
}



console.log('kata04:', factorial(5))
console.log('kata04:', factorial(7))
console.log('kata04:', factorial(2))

//  BONUS KATA05: Fibonacci Sequence

/*
Write a function named "Fibonacci" which takes an argument n and returns the nth Fibonacci number.
You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use functions you wrote in earlier katas to write this function.
For example, calling fibonacci(8) should return a result of 13. The fibonnaci sequence begins:

0  1  1  2  3  5  8  [13]  21

So, the number in brackets is the 8th Fibonacci number.
*/

// This is the farest I can go..hehehe really fun stuff!!!!

// function fibonacci(x) {
//     let total = 1
//     for (let index = 0; x < 1; x += 1) {
//         total = factorial(x, total)
//     }
//     return total
// }
// console.log('kata05:', fibonacci(8))
