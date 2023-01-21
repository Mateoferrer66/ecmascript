function* iterate(array) {  // * significa que es una funcion generator
    for(let value of array){
        yield value;
    }
}

const it = iterate(['mateo', 'sebas','mariano', 'ferrer', 'mayorga']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


