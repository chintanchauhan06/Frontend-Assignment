Question 1: What are functions in JavaScript? Explain the syntax for declaring and calling a function.

Ans : 

A function in JavaScript is a reusable block of code designed to perform a specific task.

Functions help to:

Avoid code repetition
Make code clean and organized
Improve readability and maintenance


Syntax for Declaring a Function : 

1. Function Declaration :

function functionName(parameters) {
  // code to execute
  return value; // optional
}

2. Calling a Function :

To execute a function, we call it using its name followed by parentheses.

add(2, 3);

3. Complete Example :

function greet(name) {
  console.log("Hello " + name);
}

greet("Tirth");



Question 2: What is the difference between a function declaration and a function expression?

Ans : 

Difference between Function Declaration and Function Expression in JavaScript

Both are ways to define functions, but they differ in syntax, hoisting, and usage.

1. Function Declaration : 

Declared using the function keyword with a function name
Hoisted (can be called before it is defined)
Commonly used for normal functions

Example :

greet(); // Works

function greet() {
  console.log("Hello");
}

2. Function Expression :

Function is assigned to a variable
Not hoisted (cannot be called before definition)
Can be anonymous or named

Example : 

greet(); // Error if called before this line

const greet = function () {
  console.log("Hello");
};



Question 3: Discuss the concept of parameters and return values in functions.

Ans : 

Functions often need input to work and may give output after processing.
This is done using parameters and return values.

1. Parameters

Parameters are variables listed in a function definition.
They allow functions to receive data when they are called.

Example : 

function add(a, b) {
  console.log(a + b);
}

add(5, 3); // a = 5, b = 3

2. Return Values

A return value is the result that a function sends back to the caller using the return keyword.

Example :

function multiply(x, y) {
  return x * y;
}

let result = multiply(4, 5);
console.log(result); // 20