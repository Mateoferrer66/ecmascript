// desestructuracion de elementos 

// desestructuracion en arrays

let fruits = ['Apple, Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

// desestructuracion en objetos 

let user = { username: 'Mateo', age: 33};
let { username, age} = user;
console.log(username, user.age);



// spread operator propagacion 

let person = { name: 'mateo', age: 23};
let country = 'col';

let data = { id:1, ...person, country};
console.log(data);

// rest 

function sum(num, ...values) {
    console.log(values);
        console.log(num + values[0]);
        return num + values[0];
}

sum(1, 1, 2, 3);

