// block scope = alcance que tiene la variable dentro del bloque 

// var = Function scope global
// let , const = Block scope no global 

// var = scope global - reasignacion - redeclaracion
// let = reasignacion - block scope
// const = no tiene ni reasignacion ni redeclaracion por ser constante es unica

var lastName = 'Mateo';  
lastName = 'Sebastián';
console.log(lastName);  // var // true = reasignacion //  true = redeclaracion;

let fruit = 'Apple';
fruit = 'Kiwi';  
console.log(fruit); //  let  // true = reasignacion  // false = redeclaracion;

const animal = 'Dog'; 
animal = 'Cat';   
console.log(animal); //  const  // false = reasignacion  // false = redeclaracion;



const fruits = () => {
    if (true){
        var fruit1 = 'Apple'; // funcion scope // global variable
        let fruit2 = 'Kiwi'; // block scope no global 
        const fruit3 = 'Banana'; // block scope no global
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits(); // siempre declarar las funciones mas abajo de js 
