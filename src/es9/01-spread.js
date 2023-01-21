const user = { username: "mateo", age: 23, coutry: "CO" };
const { username, ...values } = user;
console.log(username);//1 elemento
console.log(values);// 2 elementos por el ... antes de values 

//agrupacion 