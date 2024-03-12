/*
JavaScript 1. Напишіть функцію, яка приймає 2 числа та повертає мен-
ше з них.
2. Напишіть функцію, яка зводить передане число у вказаний
ступінь.
3. Напишіть функцію, яка приймає 2 числа та знак (+ - * /),
підраховує приклад і повертає результат.
4. Напишіть функцію, яка перевіряє, чи є передане їй число
простим.
5. Напишіть функцію, яка приймає число і виводить табли-
цю множення для цього числа. Викличте функцію для всіх
чисел від 2 до 9.
6. Напишіть функцію, яка реалізує роботу оператора %. Функ-
ція приймає 2 параметри та повертає залишок від ділення
першого параметра на другий. У функції використовуйте
тільки + - * /, а оператор % не використовувати.
7. Напишіть функцію, яка приймає від 1 до 5 чисел і повертає
їх суму.
8. Напишіть функцію, яка приймає від 1 до 5 чисел і повертає
більше з них. 9. Напишіть функцію, яка виводить усі парні або непарні
числа у вказаному користувачем діапазоні. Які числа ви-
водити, визначається третім параметром типу bool (true –
парні, false – непарні).
10. Напишіть функцію, яка приймає дату (день, місяць, рік) і
повертає дату наступного дня у вигляді рядка «день.місяць.
рік». Перевірку на високосний рік бажано написати окре-
мою функцією.
*/
//--
//1.
function minNumber(num1, num2) 
{
    return Math.min(num1, num2);
}

//2.
function powerOf(num, exponent) 
{
    return Math.pow(num, exponent);
}

//3.
function calculate(num1, num2, operator) 
{
    switch (operator) 
    {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

//4.
function isPrime(num) 
{
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    let i = 5;
    while (i * i <= num) 
    {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

//5.
function multiplicationTable(num) 
{
    for (let i = 1; i <= 10; i++) 
    {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

//6.
function modulo(num1, num2) 
{
    return num1 - Math.floor(num1 / num2) * num2;
}

//7.
function sum(...nums) 
{
    return nums.reduce((acc, curr) => acc + curr, 0);
}

//8.
function maxNumber(...nums) 
{
    return Math.max(...nums);
}

//9.
function printNumbers(start, end, isEven) 
{
    for (let i = start; i <= end; i++) 
    {
        if ((isEven && i % 2 === 0) || (!isEven && i % 2 !== 0))
        {
            console.log(i);
        }
    }
}

//10.
function nextDate(day, month, year) 
{
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < daysInMonth) 
    {
        return `${day + 1}.${month}.${year}`;
    } 
    else if (month < 12) 
    {
        return `1.${month + 1}.${year}`;
    } 
    else 
    {
        return `1.1.${year + 1}`;
    }
}
console.log(minNumber(10, 5));
console.log(powerOf(2, 3));
console.log(calculate(5, 3, '+'));
console.log(isPrime(11));
multiplicationTable(3);
console.log(modulo(10, 3));
console.log(sum(1, 2, 3, 4, 5));
console.log(maxNumber(1, 2, 3, 4, 5));
printNumbers(1, 10, true);
console.log(nextDate(28, 2, 2024));
