Question 1: Explain the different types of loops in JavaScript (for, while, do-while). Provide a basic example of each.

Ans : 

Different Types of Loops in JavaScript

Loops are used to repeat a block of code until a specific condition is met.
JavaScript mainly provides three basic loops :

1. for Loop

Used when the number of iterations is known in advance.

Example : 

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


2. while Loop

Used when the number of iterations is not known, but depends on a condition.

Example :

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


3. do–while Loop

Similar to while, but the code runs at least once, even if the condition is false.

Example :

let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);



Question 2: What is the difference between a while loop and a do-while loop?

Ans : 

Both while and do-while loops are used to repeat code based on a condition, but they differ in when the condition is checked.

1. while Loop

Condition is checked before the loop body executes
Loop may execute zero times
Used when execution depends strictly on the condition

Example :

let i = 6;

while (i <= 5) {
  console.log(i);
  i++;
}


2. do-while Loop

Condition is checked after the loop body executes
Loop executes at least once
Used when code must run once regardless of condition

Example :

let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);