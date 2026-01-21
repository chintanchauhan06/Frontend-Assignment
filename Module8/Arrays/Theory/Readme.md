Question 1: What is an array in JavaScript? How do you declare and initialize an array?

Ans : 

An array in JavaScript is a special variable used to store multiple values in a single variable.
Each value in an array is stored at a numeric index, starting from 0.

 Arrays help organize and manage lists of data efficiently.

 Example: Declaration + Initialization

let marks = [85, 90, 78, 88];
console.log(marks);


Question 2: Explain the methods push(), pop(), shift(), and unshift() used in arrays.

Ans :

These methods are used to add or remove elements from an array.

1. push()

Adds one or more elements to the end of an array
Returns the new length of the array

Example : 

let fruits = ["Apple", "Banana"];

fruits.push("Mango");
console.log(fruits);


2. pop()

Removes the last element from an array
Returns the removed element

Example :

let fruits = ["Apple", "Banana", "Mango"];

fruits.pop();
console.log(fruits);


3. shift()

Removes the first element from an array
Shifts all remaining elements to lower indexes
Returns the removed element

Example :

let fruits = ["Apple", "Banana", "Mango"];

fruits.shift();
console.log(fruits);


4. unshift()

Adds one or more elements to the beginning of an array
Returns the new length of the array

Example :

let fruits = ["Banana", "Mango"];

fruits.unshift("Apple");
console.log(fruits);