async function* anotherFn(){
    yield Promise.resolve(1);
    yield Promise.resolve(2);
    yield Promise.resolve(3);
}

const other = anotherFn();

other.next().then(resp => console.log(resp));
other.next().then(resp => console.log(resp));
other.next().then(resp => console.log(resp));
console.log('Hello!');

async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David"]
    for await (let valor of nombres) {
      console.log(valor)
    }
  }
  
  forAwait()