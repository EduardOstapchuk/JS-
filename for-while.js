// Work-home "factorial"
// let factorial = 1,
//     counter = 12;
// while (counter) {
//     factorial *= counter;
//     counter --;
// }
// console.log(factorial)

// Work home -triangles 

// let triangles = '';
// for(i = 0; i < 5; i++) {
//     triangles = triangles +'#'
//     console.log(triangles)
// }

// let space = " ",
//     hash = "#",
//     strin = 5;

// while(strin) {
//     strin--;
// if(!strin)
// console.log(hash.repeat(5));
// else console.log(space.repeat(strin -1), hash.repeat(5 - strin));
// }

// Work - home - String

let genString = "",
    newStr = "",
    latters = "",
    random = "";
for (let i = 65; i <= 120; i++) {latters += String.fromCharCode(i);}
for (let j = 0; j <= 25; j++) {
    genString = latters.charAt(Math.floor(Math.random() * latters.length));
    if (genString === "E" || genString === "w") {
        break;
    } else {
        random += genString;
    }
 }

 console.log(random);
 newStr = Math.floor(Math.random() * (random.length + 1));
 console.log(`Symbol at ${newStr} Symbol is ${random.charAt(newStr)}`);
 if (random.length < 5) {
     console.log(random.repeat(4));
 }
 else {
     console.log(random.substring(4));
 }
