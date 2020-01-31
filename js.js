
let generatedString="",
    newLetter,
    letters=/[a-z]/i,
    randomIndex;

while(generatedString.length<25){
    newLetter=String.fromCharCode(Math.floor(Math.random()*57+66));
    if(!newLetter.match(letters)) 
        continue;
    else if(newLetter==="E"||newLetter==="w") 
        break;
    else 
        generatedString+=newLetter;
}

console.log(generatedString);
randomIndex=Math.floor(Math.random()*(generatedString.length+1))
console.log(`Symbol at ${randomIndex} position is ${generatedString.charAt(randomIndex)}`);
