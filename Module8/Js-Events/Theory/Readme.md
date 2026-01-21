Question 1: What are JavaScript events? Explain the role of event listeners. 

Ans : 

JavaScript events are actions or occurrences that happen in the browser and can be detected by JavaScript.
They allow your webpage to respond to user interactions or browser actions.

Common JavaScript Events :

click – when a user clicks an element
mouseover – when the mouse moves over an element
keydown – when a key is pressed
submit – when a form is submitted
load – when the page finishes loading

Event Listener :

An event listener is a method that listens for a specific event on an element and executes a function when that event occurs.

EX : 

addEventListener()

Role of Event Listeners :

Event listeners:

Attach JavaScript code to HTML elements
Detect user actions
Execute callback functions when events occur
Separate HTML from JavaScript (clean code)


Question 2: How does the addEventListener() method work in JavaScript? Provide an example.

Ans : 

The addEventListener() method is used to attach an event handler to an HTML element.
It tells JavaScript to listen for a specific event and run a function when that event happens.

How It Works (Step-by-Step) :

Select an HTML element
Specify the event type
Provide a function to run when the event occurs
JavaScript waits for the event and then executes the function

Example :

<button id="btn">Click Me</button>

<script>
  let button = document.getElementById("btn");

  button.addEventListener("click", function () {
    console.log("Button was clicked!");
  });
</script>