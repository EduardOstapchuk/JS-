

// work-home 4
// let UserNumber = confirm ('Сыграем?')
// console.log(UserNumber, "type: ", typeof(UserNumber))

// if (UserNumber) {
//     let num = +prompt('Введите число')
//     console.log('Inputed number: ', num, "type:", typeof num )
//     if (isNaN(num)) {
//         alert('Вы ввели буквы')
//     } else {
//         if (!num) {
//             alert('Вы отказались')
//         } else {
//             if (num % 2 === 0) {
//                 alert('Четное')
//             } else {
//                 if (num % 2 === 1) 
//                 alert('Не четное')
//             } 
//         }
//     }
// } 


// Work - home 5

// let UserNumber = +prompt('Введите число!')
//     console.log(`User number:`, UserNumber, "type: ", typeof (UserNumber))
//     if (UserNumber < 0) {
//         result = UserNumber % 3 === 0? UserNumber ** 2 : UserNumber % 8;
//     }
//         else if(UserNumber > 0) {
//             let more = Math.ceil(Math.sqrt(UserNumber));
//             result = more > 1? more ** 2: more - 0.5;
//         } else {
//             result = UserNumber .toString();    
//         } 
//         alert(`${result} (${typeof(result)})`);


// Work - home 6

let number = confirm("Вам точно есть 18?");
    if (number) {
        let numberUser = +prompt("Угадай число от 0 до 10"),
            numberRandom = Math.floor(10 * Math.random()) + 1;
        if (numberUser === numberRandom) {
            alert("Вы угадали!");
        }else {
            alert("Вы не угадали!");
        }
    }else {
        alert("Вам нет 18");
    }
            