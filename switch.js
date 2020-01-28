// let symbol = prompt('Введите любой символ!');
// symbol = (symbol === null) ?
//     "Cancel" : (symbol === "" || symbol.length > 1) ?
//         "" : (symbol.toLocaleLowerCase());

// switch(symbol) {
//     case "a":
//     case "e":
//     case "o":
//         alert(symbol.toLocaleUpperCase());
//         break;

//     case "x":
//     case "y":
//         alert(symbol + symbol);
//         break;
    
//     case "s":
//     case "b":
//     case "q":
//     case "m":
//         let numbersum1 = Math.trunc(10 * Math.random()) || 1,
//             numbersum2 = Math.trunc(10 * Math.random()) || 1,
//             numbersum3 = Math.trunc(10 * Math.random()) || 1;
//         alert(numbersum1, numbersum2, numbersum3);
//         break;

//     case "":
//         alert(Boolean(symbol));
//         break;
    
//     case "Cancel":
//         alert("Ввод был отменен");
//         break;
//     default:
//         let num1 = (Math.floor(10 * Math.random())),
//             num2 = (Math.floor(10 * Math.random())),
//             num3 = (Math.floor(10 * Math.random()));
//         alert(num1, num2 , num3);
// }