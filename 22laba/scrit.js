// 1. Функція для обчислення залишку від ділення числа на 60
function seconds(total) {
  return total % 60;
}

// 2. Функція для обчислення периметра правильного багатокутника
function perimeter(side, count) {
  return side * count;
}

// 3. Функція для виведення чисел від 1 до n замість певних чисел виводить відповідні рядки
function printNumbers(n) {
  for (var i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

// 4. Функція для обчислення середнього арифметичного трьох чисел
function calculate(a, b, c) {
  var average = (a + b + c) / 3;
  console.log('Середнє арифметичне: ' + average);
}

// 5. Функція для перевірки діленості числа на два числа за допомогою конструкції if
function isDivisibleIf(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

// 5. Функція для перевірки діленості числа на два числа за допомогою тернарного оператора
function isDivisibleTernary(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false;
}

// 5. Функція для перевірки діленості числа на два числа без використання конструкції if і тернарного оператора
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// 6. Функція для роботи з масивом, виводить найбільше та найменше значення, суму, середнє арифметичне та непарні значення
function arrayOperations(arr) {
  var max = Math.max.apply(null, arr);
  var min = Math.min.apply(null, arr);
  var sum = arr.reduce(function(a, b) {
    return a + b;
  }, 0);
  var average = sum / arr.length;
  var oddValues = arr.filter(function(num) {
    return num % 2 !== 0;
  });

  console.log('Найбільше значення: ' + max);
  console.log('Найменше значення: ' + min);
  console.log('Сума елементів: ' + sum);
  console.log('Середнє арифметичне: ' + average);
  console.log('Непарні значення: ' + oddValues);
}

// 7. Функція для заміни чисел в двовимірному масиві
function modifyMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        matrix[i][j] = 0;
      } else if (matrix[i][j] > 0) {
        matrix[i][j] = 1;
      }
    }
  }
}

// 8. Функції для арифметичних операцій
function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function mul(a, b) {
  console.log(a * b);
}

function div(a, b) {
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log('Ділення на нуль неможливе.');
  }
}

// 9. Функція для перевірки властивостей числа
function checkNumber(number) {
  var isPositive = number > 0 ? true : false;
  var isPrime = isNumberPrime(number);
  var isDivisibleBy23569 = isNumberDivisible(number, [2, 3, 5, 6, 9]);

  console.log('Число є ' + (isPositive ? 'позитивним' : 'негативним'));
  console.log('Число ' + (isPrime ? 'є простим' : 'не є простим'));
  console.log('Число ' + (isDivisibleBy23569 ? 'ділиться на 2, 3, 5, 6, 9 без залишку' : 'не ділиться на 2, 3, 5, 6, 9 без залишку'));
}

function isNumberPrime(number) {
  if (number < 2) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function isNumberDivisible(number, divisors) {
  for (var i = 0; i < divisors.length; i++) {
    if (number % divisors[i] !== 0) {
      return false;
    }
  }
  return true;
}

// 10. Функція для зміни масиву
function modifyArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr.reverse();
}

// 11. Функція для видалення дублікатів з масиву
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

// Виклик функцій з прикладовими параметрами
console.log('Залишок від ділення числа 123 на 60: ' + seconds(123));
console.log('Периметр правильного багатокутника зі стороною 5 та 6 сторонами: ' + perimeter(5, 6));
console.log('Числа від 1 до 15:');
printNumbers(15);
calculate(10, 20, 30);
console.log('Чи число 15 ділиться на 3 і 5? ' + isDivisibleIf(15, 3, 5));
console.log('Чи число 15 ділиться на 3 і 5? ' + isDivisibleTernary(15, 3, 5));
console.log('Чи число 15 ділиться на 3 і 5? ' + isDivisible(15, 3, 5));
var numbers = [8, 2, 9, 1, 5, 4];
arrayOperations(numbers);
console.log('Оригінальний масив: ' + numbers);
var matrix = [[-1, 2, -3, 4, -5], [6, -7, 8, -9, 10], [-11, 12, -13, 14, -15], [16, -17, 18, -19, 20], [-21, 22, -23, 24, -25]];
modifyMatrix(matrix);
console.log('Модифікований масив:');
console.log(matrix);
add(10, 5);
sub(10, 5);
mul(10, 5);
div(10, 5);
checkNumber(15);
var array = [1, 2, 'a', 4, 'b', 6];
console.log('Модифікований масив: ' + modifyArray(array));
var numbersArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log('Масив з видаленими дублікатами: ' + removeDuplicates(numbersArray));
