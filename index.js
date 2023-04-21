// ЛАБОРАТОРНАЯ № 2

// 4 ВАРИАНТ "ИЗБЫТОЧНЫЕ ЧИСЛА"
// let n = Number(prompt('Введите число'));
// let j = 0;
// for(let i = 1; i < n; i++){
//     if(n%i === 0){
//         j+=i;
//     }
// }
// if(n<j){
//     console.log("Число избыточное!")
// }
// else{
//     console.log('Попробуйте другое число')
// }



// 1 ВАРИАНТ (не получается ввести else ??) "ПРОСТЫЕ ЧИСЛА"
// let n = Number(prompt('Введите число'));
// let j = 1;
// for (let i = 2; i <= n; i++) { // Для всех i...
//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//       if (i % j == 0) continue; // не подходит, берём следующее
//     }
//     console.log("Число простое!");}


// ЧТО-ТО ИЗ ИНТЕРНЕТА
// let n = Number(prompt('Введите число'));;
// for (let i = 2; i <= n; i++) {
//   for (let j = 2; j <= i; j++) {
//     if ((i % j == 0) && (j != i)) {
//         console.log('прост')
//       break;
//     } else {
//       console.log('непрост');
//       break;
//     }
//   }
// }



//ПРОВЕРЯЕТ ЯВЛЯЕТСЯ ЛИ ЧИСЛО, ЧИСЛОМ АРМСТРОНГА
// 6 вариант, но без отрезков(?) как их включить, чтобы ничего не сломать
// let e, x, d = 0;
// let b = prompt("Введите число");
// x=b;
// while (x > 0) {
//   e = x % 10;
//   x = parseInt(x/10); // метод parseInt() принимает в качестве аргумента строковое значение и возвращает целое число, которое соответствует указанному основанию системы счисления
//   d = d + (e*e*e);
// }
// if (b==d)
//    alert("данное число является числом Армстронга");
// else
//    alert("данное число не является числом Армстронга");


// ЗАДАНИЕ: вывести столбец чисел от 1 до 100
// let i = 0;
// for (i = 0; i < 101; i++) { // используем существующую переменную
//     alert(i); // 0, 1, 2
//   }
//   console.log(i)



// 3 ВАРИАНТ
// let n = Number(prompt('Введите число'));
// let sum = 0;
// for (let i = 1; i<n; i++);{
//     if (n%i===0){
//     sum = sum + i}
//     }
//     if (sum===n){
//         console.log('Число совершенно')
//     }
//     else {
//         console.log('Число не совершенно')
//     }
// ----------------------------------------------------------------------------------------------------------------------------------
// 3 ЛАБОРАТОРНАЯ РАБОТА
// меняет цельсия в фаренгейты
// let grad = prompt ('Введите температуру в градусах Цельсия', '');
// far = grad * 1.8 + 32;
// alert  (far);

// ЭТО ЧТО???
// function FahrenheightConvert(celcius) {
//   let fahrenheight = Math.round(9 / 5 * (celcius + 32));
//   console.log ('fahrenheight');
// }
// FahrenheightConvert(celcius);



// 4 ЗАДАНИЕ
// Напишите функцию, которая спрашивает у пользователя количество вводимых чисел N.
// Далее в программу по очереди вводятся N чисел.
// Функция должна вывести сообщение о том, каких чисел больше: положительных или отрицательных.

// function number(n) {
//     let countpositive = 0;
//     let countnegative = 0;
//     for (let i = 1; i <= n; i++) {
//         let e = Number(prompt('число'));

//         if (e >= 0) {
//             countpositive++;
//         } else {
//             countnegative++;
//         }
//     }

//     if (countpositive > countnegative) {
//         console.log('Больше положительных');
//     } else if (countpositive == countnegative) {
//         console.log('Одинаково');
//     } else {
//         console.log('Больше отрицательных');
//     }
// }
// number(prompt('количество вводимых чисел N'));

//8 ЗАДАНИЕ
// Напишите функцию для перевода температуры в градусах Цельсия в градусы Фаренгейта.
// Затем выведите соотношения температур, выраженных в градусах Цельсия и Фаренгейта.
// Необходимо вывести температуры от 0 до 100 градусов Цельсия, кратные 10.


// function cToF(celsius) {
//     let cTemp = celsius;
//     let cToFahr = cTemp * 9 / 5 + 32;
//     let message = cTemp + 'C это ' + cToFahr + 'F.';
//     console.log(message);
// }

// function fToC(fahrenheit) {
//     let fTemp = fahrenheit;
//     let fToCel = (fTemp - 32) * 5 / 9;
//     let message = fTemp + 'F это ' + fToCel + 'C.';
//     console.log(message);
// }
// cToF(0);
// cToF(10);
// cToF(20);
// cToF(30);
// cToF(40);
// cToF(50);
// cToF(60);
// cToF(70);
// cToF(80);
// cToF(90);
// cToF(100);
//------------------------------------------------------------------------------------------



// 4 ЛАБОРАТОРНАЯ РАБОТА


// Создайте массив вещественных чисел как минимум из 5 элементов.
// Добавьте в конец массива число 10.
// Удалите из массива 2 элемента со второго по порядку элемента.
// При помощи цикла выведите в консоль значения всех элементов массива.
// При помощи цикла найдите сумму всех элементов массива.
// На основе результата задания 3, найдите среднее арифметическое значение.
// Среднее арифметическое массива - сумма элементов делённая на их количество.

// const arr = [0, 1, 2, 3, 4];// console.log(arr); // console.log(arr.lenght);
// arr.push(10);
// arr.splice(1, 2); // console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// let array = [0, 1, 2, 3, 4];
// let sum = 0;
// for (let item of array) {
//     sum += item;
// }
// console.log(sum);

// let ari = 0;
// for (let item of arr) {
//     ari += item;
// }
// let result = ari/arr.length;
// console.log(result);
//---------------------------------------------------------------------------------------------






// ПРАКТИКА ОТ 18.11

// Дан массив ФИО пользователей. Необходимо посчитать, сколько пользователей с именем, которое вводит пользователь, имеется в массиве.
// const arr = ['Иванов Иван Иванович', 'БеЛьГЕР Ирина СЕРГеевна']
// const substr = prompt('Введите поисковую строку').toLowerCase();
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(substring)) {
//         flag = time;
//     }
// }
// if (flag) {
//     console.log('Найдено');
// } else { alert('Нет') }

// Напишите функцию, которая принимает на вход количество (N) учеников в классе.
// Функция последовательно спрашивает у пользователя данные о оценках N учеников. Функция должна вернуть среднюю оценку в классе.

// function classroom(n) {
//     let mark = 0
//     let sum = 0
//     for (let i = 0; i < n; i++) {
//         mark = +prompt('Введите число')
//         sum = sum + mark
//     }
//     return = sum / n
// }
// let n = +prompt('Введите число')
// console.log(classroom(n));
// ошибки там!!!!!!!!!!!!!

// function Coly(N){
//     let count = 0
//     for(let i=0; i<N; i++){
//         let V = 0
//         V = +prompt('Введите число')
//         if (V>5){
//             count++
//         }
//     }
//     returncount
// }
// let N = +prompt('Введите число');
// console.log(Coly(N));
//----------------------------------------------

// 5 ЛАБОРАТОРНАЯ РАБОТА

// const user = {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
//     age: '30',
//     gender: 'мужской',

// };

// const user1 = {
//     surname: 'Иванова',
//     name: 'Иванесса',
//     patronymic: 'Ивановна',
//     age: '32',
//     gender: 'женский',

// };

// const user2 = {
//     surname: 'Алексеев',
//     name: 'Алексей',
//     patronymic: 'Алексеевич',
//     age: '19',
//     gender: 'мужской',

// };

// const user3 = {
//     surname: 'Алексеева',
//     name: 'Алексия',
//     patronymic: 'Алексеевна',
//     age: '21',
//     gender: 'женский',

// };

// const user4 = {
//     surname: 'Антонов',
//     name: 'Антон',
//     patronymic: 'Антонович',
//     age: '40',
//     gender: 'мужской',

// };
// const array = [user, user1, user2, user3, user4]
// for (let i = 0; i < array.length; i++) {
//     if (array[i].surname === 'Иванов') {
//         console.log(i)
//     }
// }
// array[3].age = Number(array[3].age) + 1
// array[3].job = 'Программист'
// user.hello = function () {
//     console.log('Привет,' + ' я' + ' ' + this.name)
// }
// user.hello();




// 6 ЛАБОРАТОРНАЯ РАБОТА

// const user = {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
// };
// const user1 = {
//     surname: 'Иванова',
//     name: 'Иванесса',
//     patronymic: 'Ивановна',
// };
// const user2 = {
//     surname: 'Алексеев',
//     name: 'Алексей',
//     patronymic: 'Алексеевич',
// };
// const user3 = {
//     surname: 'Алексеева',
//     name: 'Алексия',
//     patronymic: 'Алексеевна',
// };
// const user4 = {
//     surname: 'Антонов',
//     name: 'Антон',
//     patronymic: 'Антонович',
// };

// const users = [user, user1, user2, user3, user4]
// for (const item of users) {
//     item.SNP = item.surname[0].toUpperCase() + item.surname.slice(1) + ' ' + item.name[0].toUpperCase() + item.name.slice(1) + ' ' + item.patronymic[0].toUpperCase(0) + item.patronymic.slice(1)
//     console.log(item.SNP)
// };
// const search = 'кс'.toLowerCase()
// for (const item of users) {
//     if (item.SNP.toLowerCase().includes(search)) {
//         console.log(item.SNP)
//     }
//  }
// //---------------------------------

// 7 ЛАБОРАТОРНАЯ РАБОТА

// const user = {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
//     age: '30',
//     gender: 'мужской',

// };

// const user1 = {
//     surname: 'Иванова',
//     name: 'Иванесса',
//     patronymic: 'Ивановна',
//     age: '32',
//     gender: 'женский',

// };

// const user2 = {
//     surname: 'Алексеев',
//     name: 'Алексей',
//     patronymic: 'Алексеевич',
//     age: '19',
//     gender: 'мужской',

// };

// const user3 = {
//     surname: 'Алексеева',
//     name: 'Алексия',
//     patronymic: 'Алексеевна',
//     age: '21',
//     gender: 'женский',

// };

// const user4 = {
//     surname: 'Антонов',
//     name: 'Антон',
//     patronymic: 'Антонович',
//     age: '14',
//     gender: 'мужской',

// };

// const users = [user, user1, user2, user3, user4];
// function sortUsers(users) {
//     return users.sort((a, b) => {
//         if (a.age > b.age) {
//             return -1;
//         }
//         if (a.age < b.age) {
//             return 1;
//         }
//         return 0;
//     });
// }
// console.log(sortUsers(users)); // отсортировала по убыванию возраста

// // женщины старше 30 лет
// let newWoman = users.filter(function (obj){
//     return obj.gender === 'женский' && obj.age > 30;
//     });
//     console.log(newWoman);

// // 1 способ
// const isAdults = users.every(user => {
//     return user.age > '18'
//   })
//   console.log(isAdults);

// 2 ПРАВИЛЬНЫЙ СПОСОБ определения взрослых юзеров
// for (let i = 0; i < users.length; i++) {
//      if (users.age >'18') {
//           console.log('Все пользователи совершеннолетние')
//    }
//    else (users.age <'18'); {
//         console.log('НЕ все пользователи совершеннолетние')
//     }
// }

// // какие пользователи старше 18 3 способ
// let result = users.filter(function(item, index, array){
//     return item.age >= 18;
// });
// console.log(result);

//------------------------------------

