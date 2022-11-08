import { compose, pipe } from "lodash/fp";
import { Map } from "immutable";
import { produce } from "immer";

// redux is based on functional programming principle

//Programming paradigm
// 1. Imperative programming
// 2. Declarative programming
// 3. Functional programming
// 4. Object oriented programming
// 5. Procedural programming
// 6. Event driven programming

//Other functional programming languages
// 1. Scala
// 2. Erlang
// 3. Haskell
// 4. Clojure
// 5. F#
// 6. Lisp
// 7. Javascript

console.log("Hello World!");

//Functions are first class citizens
function sayHello() {
  return "Hello World!";
}
//returning function from another function
function sayHelloTo() {
  return function () {
    return "Hello World!";
  };
}
//or
function sayHello2() {
  return () => {
    return "Hello World!";
  };
}
let fn = sayHello;

//passing function as argument
function greet(fnMessage) {
  console.log(fnMessage());
}
// greet(sayHello);

//Higher order functions
// 1. A function that takes a function as an argument
// 2. A function that returns a function

//Functinal composition
const input = "    JavaScript    ";
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInSpan = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();
// const result = wrapInDiv(toLowerCase(trim(input))); //this is functional composition but not readable and get messy

//Composition piping
const transform = pipe(trim, toLowerCase, wrapInSpan("div"));
console.log(transform(input));
// const transform = compose(wrapInDiv, toLowerCase, trim);

// Pure functions
// 1. Given the same input, will always return the same output
// 2. Produces no side effects
// 3. No external state
// 4. No external input
// 5. No external dependencies
// 6. No external resources
// 7. can not mutate state or their arguments

// Immutability
// 1. Unchanging over time or unable to be changed
// 2. Immutable data cannot be changed once created,
// leading to much simpler application development,
// no defensive copying, and enabling advanced memoization
// and change detection techniques with simple logic
// 3. Immutable data can be shared between threads,

//Why use immutability? Pros
// 1. Predictability
// 2. It makes change detection faster
// 3. Concurrency

//Why use immutability? Cons
// 1. Performance
// 2. Memory overhead

// Updating an object
const person = {
  name: "Max",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};

const updated = Object.assign({}, person, { name: "Bob", age: 30 });
// console.log(updated);

//Using spread operator (shallow copy)
const updated2 = { ...person, name: "Bob" };

// spread operator with deep copy
const person2 = {
  name: "Max",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};

const updated3 = {
  ...person2,
  address: {
    ...person2.address,
    city: "New York",
  },
  name: "Bob",
};
console.log(updated3);

//Updating an array
const numbers = [1, 2, 3];

//Adding to an array at a specific index
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];

//Removing from an array at a specific index
const removed = numbers.filter((n) => n !== 2);

//Updating an array at a specific index
const updatedNums = numbers.map((n) => (n === 2 ? 20 : n));

//Enforcing immutability library
// 1. Immutable.js
// 2. Mori
// 3. Seamless-immutable
// 4. Immer

//Immutable.js
let book = Map({ title: "Harry Potter" });
console.log(book.get("title"));

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);
console.log(book.toJS());

//Immer
let myBook = { title: "Harry Potter" };

function publish2(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

let updatedImmer = publish2(myBook);

console.log(myBook);
console.log("Immer", updatedImmer);
