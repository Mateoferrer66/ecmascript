let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + '' + world + '!';  //metodo de contenacion antiguo no amigable 
console.log(epicPhrase);


// Template literals metodo actual  

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);



// multiine strings

let string = 'esto es un string \n ' + ' continuacion de string';

let stringdos = 'nueva frase';

console.log(string);
console.log(stringdos);