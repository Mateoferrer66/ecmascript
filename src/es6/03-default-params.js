//metodo anterior de como usar parametros para las funcionees

function newUser (name, age, country){
    var name = name || 'sebas';
    var age = age || 23; 
    var country = country || 'mx';
    console.log(name, age, country);

}

newUser();
newUser('mateo', 23, 'us');

//metodo actual funciones 

function newAdmin(name = 'Mateo', age = 32, country = 'us'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('sebas', 30, 'dubai');