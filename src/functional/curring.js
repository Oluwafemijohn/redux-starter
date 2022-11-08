//curring allows you to create a function that will take a variable number of arguments
// and then apply them to a function one at a time.

// example
const add = (a, b) => a + b;

const add1 = (a) => (b) => a + b;
add1(1)(2); // 3
