Question 1: What is error handling in JavaScript? Explain the try, catch, and finally blocks with an example.

Ans : 

Error handling in JavaScript is the process of detecting, managing, and responding to runtime errors so that a program does not crash unexpectedly.
It allows developers to handle errors gracefully and keep the application running.

JavaScript uses the try...catch...finally statement for error handling.

1. try Block

Contains the code that may cause an error
JavaScript attempts to execute this code

try {
  // risky code
}


2. catch Block

Executes only if an error occurs in the try block
Receives the error object

catch (error) {
  // error handling code
}


3. finally Block

Executes always, whether an error occurs or not
Used for cleanup operations

finally {
  // cleanup code
}



Question 2: Why is error handling important in JavaScript applications?

Ans : 

Error handling is crucial in JavaScript because it helps applications run safely, smoothly, and reliably, even when something goes wrong.

Key Reasons Why Error Handling Is Important :

1. Prevents Application Crashes

Without error handling, a single runtime error can stop the entire script.

try {
  JSON.parse("invalid JSON");
} catch (error) {
  console.log("Invalid data received");
}


2. Improves User Experience

Handled errors allow you to show friendly messages instead of broken pages or blank screens.

catch {
  alert("Something went wrong. Please try again.");
}


3. Helps in Debugging

Error objects provide useful details like:
Error message
Stack trace

catch (error) {
  console.error(error.message);
}


4. Ensures Application Stability

Critical parts of the application can be protected so that one failure doesn’t break everything.


5. Handles Unexpected Situations

Errors may occur due to:

Network failure
Invalid user input
API errors
Undefined values
Error handling prepares the app for these situations.


6. Allows Cleanup Using finally

Resources like timers, files, or connections can be safely released.

finally {
  console.log("Cleanup done");
}