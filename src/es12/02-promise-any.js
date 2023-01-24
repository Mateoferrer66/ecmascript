const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

const promises = [promise1, promise2, promise3];


Promise.any(promises).then((value) => console.log(value));

// Promise.any([promesa1, promesa2, promesa3])

//     .then(respuesta => console.log(respuesta)) // Promise 3
//     .catch(error => console.log(error))

