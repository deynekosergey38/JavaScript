// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number1, number2) {
    if (number1 % 2 === 0 || number2 % 2 === 0) {
        return true
    } else {
        return false
    }
}