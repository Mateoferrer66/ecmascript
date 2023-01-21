//const newUser = new User();  //instanciar 

class user {     // declarar
    // metodos
    saludo() {
        return 'JAJAJAJAJAJA'
    }
};

const f66 = new user();
console.log(f66.saludo());

const sd = new user();
console.log(sd.saludo());

class user {
    //constructor
    constructor(){
        console.log('new user');
    }
    saludo(){
        return 'JAJAJAJAJAJA JAJAJAJAJAJA JAJAJAJAJAJA';
    }
}

const mateo = new user();

//this

class user {
    constructor(name){
        this.name = name;
    }
    //metodos
    reir(){
        return 'JAJAJAJAJAJA'
    }
    saludo(){
        return `${this.reir()} ${this.name}`;
    }
}

const sebas = new user('sebas');
console.log(sebas.saludo());

// setters y getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //metoodos
    reir(){
        return 'JAJAJAJAJAJA';
    }
    saludo(){
        return `${this.reir()} ${this.name}`;
    }
    
    get uAge(){ //get el que trae valor de la variable
        return this.age;
    }
    
    set uAge(n){ // set el que asigna el valor a la variable 
        this.age = n;
    }
}


const mateo1 = new user('mateoferrer', 66);
console.log(mateo1.uAge);
console.log(mateo1.uAge = 420);

console.log(mateo1.name);