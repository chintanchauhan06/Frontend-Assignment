Question 1: What is an object in JavaScript? How are objects different from arrays?

Ans : 

An object in JavaScript is a non-primitive data type used to store related data and functionality in the form of key–value pairs (also called properties).

Each key (property name) is a string, and each value can be any data type (number, string, array, function, or even another object).

How Objects Are Different from Arrays

Although both objects and arrays store multiple values, they are used for different purposes.

Summary Table :

Feature	    Object	            Array

Type	    Non-primitive	    Non-primitive
Data type	object	            object
Access	    Named keys	        Index
Best for	Structured data	    Ordered lists



Question 2: Explain how to access and update object properties using dot notation and bracket notation.

Ans : 

In JavaScript, object properties can be accessed and updated in two main ways:

1. Dot notation
2. Bracket notation

1. Dot Notation :

Accessing Properties :

let student = {
  name: "Tirth",
  age: 21,
  course: "JavaScript"
};

console.log(student.name);   // Tirth
console.log(student.age);    // 21


Updating Properties :

student.age = 22;
console.log(student.age); // 22

Adding New Property
student.city = "Ahmedabad";


2. Bracket Notation :

Accessing Properties :

console.log(student["name"]);   // Tirth

Updating Properties :

student["course"] = "React JS";

Using Dynamic Property Names :

let key = "age";
console.log(student[key]); // 22