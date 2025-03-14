// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

function myDay (){
  const weather = "sunny";
  console.log(`The weather is ${weather}.`);
  function transport() {
    const bike = "Kawasaki Ninja";
    console.log(`When it is ${weather}, I enjoy riding my ${bike}.`);
    function sad() {
      const husband = "Matt";
      console.log(`The ${bike} belongs to ${husband}, so when it is ${weather} I have to be a pillion.`)
    }
    sad()
  }
  transport()
}
myDay();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
    let count = 0;
    return function counter() { 
      count++; 
      console.log(count)
    };
}

const myCount = counterMaker();

myCount();
myCount();
myCount();
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const limitedCounter = () => {
  let count = 0;
  return function counter (){
    if (count < 5) {
      count++;
    } else {
      count = 1;
    }
    console.log(count);
  }
}



const newCounter = limitedCounter()

newCounter();
newCounter();
newCounter();
newCounter();
newCounter();
newCounter();



// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0;
  const increment = function () {
    count++;
    console.log(count);
  }
  const decrement = function () {
    count--;
    console.log(count);
  }
  return { increment : increment,
  decrement : decrement};
};

const objectCounter = counterFactory(); 

objectCounter.increment();
objectCounter.increment();
objectCounter.increment();
objectCounter.increment();
objectCounter.decrement();
objectCounter.decrement();
objectCounter.increment();
objectCounter.increment();

