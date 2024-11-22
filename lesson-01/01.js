// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum


let START = 1;
let sum = 0;

console.log('НАЧИНАЕМ');

while (START <= 20) {
    sum = sum + START;
    START++;
}

console.log('ГОТОВО: ' + sum);