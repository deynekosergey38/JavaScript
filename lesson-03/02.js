// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае
let number1 = 10
let number2 = 7

function isEven(number1, number2) {
   return number1 % 2 === 0 || number2 % 2 !== 0
}

console.log(isEven(number1))
console.log(isEven(number2))