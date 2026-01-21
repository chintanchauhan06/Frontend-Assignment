Question 1: Explain the setTimeout() and setInterval() functions in JavaScript. How are they used for timing events?

Ans : 

JavaScript provides timing functions that allow you to execute code after a delay or repeat code at fixed time intervals.
These are commonly used for timing events, animations, notifications, and auto-updates.

1. setTimeout()

Purpose :

Executes a function once after a specified delay (in milliseconds).

Example :

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);

Clearing setTimeout()
let timer = setTimeout(() => {
  alert("Hello");
}, 3000);

clearTimeout(timer);


2. setInterval()

Purpose :

Executes a function repeatedly at fixed intervals.

Example :

setInterval(function () {
  console.log("This runs every 1 second");
}, 1000);


Clearing setInterval()
let intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

clearInterval(intervalId);



Question 2: Provide an example of how to use setTimeout() to delay an action by 2 seconds.

Ans :

Using setTimeout() to Delay an Action by 2 Seconds
The setTimeout() function allows you to execute a piece of code after a specified delay in milliseconds.
Since 2 seconds = 2000 milliseconds, you can use 2000 as the delay.


Example 1: Using an Anonymous Function

setTimeout(function() {
  console.log("This message appears after 2 seconds");
}, 2000);


Example 2: Using an Arrow Function

setTimeout(() => {
  alert("Hello! 2 seconds have passed.");
}, 2000);

Example 3: Using a Named Function

function greet() {
  console.log("Hello after 2 seconds!");
}

setTimeout(greet, 2000);