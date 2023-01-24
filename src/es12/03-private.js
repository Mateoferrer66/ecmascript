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
    #saludo(){ //private #
        return `${this.reir()} ${this.name}`;
    }
    
    get #uAge(){ //get el que trae valor de la variable y el # significa que esta privado 
        return this.age;
    }
    
    set #uAge(n){ // set el que asigna el valor a la variable 
        this.age = n;
    }
}

const mateo1 = new user('mateoferrer', 66);
console.log(mateo1.uAge);
console.log(mateo1.uAge = 420);

console.log(mateo1.name);