// Generator Function Exploration

// Basic generator function
function* naturalNumbers(){
  let number = 1;
  while (true) yield number++;
}

var naturalNumberIterator = naturalNumbers();

console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);

function* anotherGenerator(name) {
  yield  `Hi ${name}, anotherGenerator says hi. `
}

// Generator function inception. Calling a generator function within a generator funciton
function* myGenerator(name) {
  yield `Hi ${name}`;
  yield* anotherGenerator(name)
  yield 'Bye!'
}

let gen = myGenerator('Nathan')

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

Passing arguments to generator functions
function* myGenerator() {
  console.log('Hello ', yield)
  console.log('Hi, I am looking for ', yield)
}

let gen = myGenerator()

gen.next()
gen.next('Nathan');
gen.next('Graeme');

// Once returned, no more yields
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

var gen = yieldAndReturn()
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
