//1
// const a = prompt();
// if(!isNaN(a))
//     console.log(true);
// else
//     console.log(false);
// (!isNaN(a))?console.log(true): console.log(false);

//2
//  const a = prompt();
// if(a[0]=='A')
//     console.log(true);
// else
//     console.log(false);
// (a[0]=='A')?console.log(true):console.log(false);

//3
// const a = prompt();
// if(a[a.length-1] =='!')
//     console.log(true);
// else
//     console.log(false);
// (a[a.length-1] =='!')? console.log(true): console.log(false);

//4
// const name =prompt();
// console.log(`Hi, ${name}`);

//5
// const name = prompt("Name");
// const lastName = prompt("Last Name");
// console.log(`${name} ${lastName}`)

//6
// const a = prompt();
// const b = prompt();
// const c = prompt();
// console.log(`${a}.${b}.${c}`)

//7
// const a = prompt();
// const b = prompt();
// console.log(`https://${a}/${b}`);

//8
// const stroka = prompt("Введите строку:");
// let n = prompt("Введите индекс (число):");

// if (isNaN(n)) {
//     console.log('Не число');
// } else {
//     n = Number(n); 
//     if (n >= 0 && n < stroka.length) {
//         console.log(stroka[n]); 
//     } else {
//         console.log('Вне диапазона');
//     }
// }

//9
// const stroka = prompt("Введите строку:");
// console.log(`\"${stroka} \"`);

//10
// const stroka1 = prompt("Введите строку:");
// const stroka2 = prompt("Введите строку:");
// console.log(`${stroka1}\n${stroka2}`);

//11
// const stroka1 = prompt("Введите строку:");
// const stroka2 = prompt("Введите строку:");
// const stroka3 = prompt("Введите строку:");
// console.log(`${stroka1}\t${stroka2}\t${stroka3}`);

//12
// const timeOfDay = prompt("Введите число от 1 до 4:");
// const time = Number(timeOfDay);
// switch (time) {
//     case 1:
//         console.log("Утро");
//         break;
//     case 2:
//         console.log("День");
//         break;
//     case 3:
//         console.log("Вечер");
//         break;
//     case 4:
//         console.log("Ночь");
//         break;
//     default:
//         console.log("Некорректный ввод. Пожалуйста, введите число от 1 до 4.");
// }

//13
// const animal = prompt("Введите название домашнего животного:");

// switch (animal.toLowerCase()) {
//     case "собака":
//         console.log("Млекопитающее");
//         break;
//     case "кошка":
//         console.log("Млекопитающее");
//         break;
//     case "попугай":
//         console.log("Птица");
//         break;
//     case "рыбка":
//         console.log("Рыба");
//         break;
//     default:
//         console.log("Неизвестное животное.");
// }

//14
// const num1 = Number(prompt("Введите первое число:"));
// const num2 = Number(prompt("Введите второе число:"));

// const result = (num1 > num2) ? "Первое число больше" : (num1 < num2) ? "Второе число больше" :"Числа равны";
// console.log(result);

//15
// const num1 = Number(prompt("Введите первое число:"));
// const num2 = Number(prompt("Введите второе число для проверки кратности:"));
// const result = (num2 !== 0) ? (num1 % num2 === 0 ? "Первое число кратно второму." : "Первое число не кратно второму.") : "Деление на ноль.";
// console.log(result);

//16
// const number = Number(prompt("Введите число:"));
// const result = (number >= 10 && number <= 20) ? "В диапазоне" : "Вне диапазона";
// console.log(`Число ${number} — ${result}.`);

//17
// const userInput = prompt("Введите строку:");
// if (userInput[0].toUpperCase() === 'A') {
//     console.log(`Строка '${userInput}' начинается с буквы А.`);
// } else {
//     console.log(`Строка '${userInput}' не начинается с буквы А.`);
// }