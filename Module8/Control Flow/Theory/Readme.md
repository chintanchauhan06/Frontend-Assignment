Question 1: What is control flow in JavaScript? Explain how if-else statements work with an example.

Ans : 

Control flow refers to the order in which JavaScript statements are executed in a program.
Normally, code runs top to bottom, but control flow statements allow us to change this order based on conditions or decisions.

if–else Statements in JavaScript :

The if–else statement is used to execute different blocks of code based on conditions.

How if–else Works : 

JavaScript checks the condition
If the condition is true, the if block runs
If the condition is false, the else block runs

Example
let age = 17;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}



Question 2: Describe how switch statements work in JavaScript. When should you use a
switch statement instead of if-else?

Ans : 

How switch Statements Work in JavaScript :

A switch statement is a control flow structure used to execute different code blocks based on the value of an expression.
It is mainly used when you need to compare one value against multiple fixed options.


How switch Works :

The expression is evaluated once
Its value is compared with each case using strict comparison (===)
When a match is found, that case block runs
break stops execution from moving to the next case
If no case matches, the default block runs

Example :

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}