Question 1: How are events handled in React vs Vanilla JavaScript? What are Synthetic Events?
Event Handling in Vanilla JavaScript

 You directly attach events to DOM elements:

document.getElementById("btn").addEventListener("click", function () {
  console.log("Clicked");
});
Event Handling in React

React uses JSX-based event handling

<button onClick={handleClick}>Click Me</button>
function handleClick() {
  console.log("Clicked");
}
Key  Differences

Feature	        React	            Vanilla JS
Syntax	        JSX (onClick)	    addEventListener
Naming	        camelCase	        lowercase
Event Type	     Synthetic Event	Native Event
Performance	O   ptimizedDirect DOM
What are Synthetic Events?

 A Synthetic Event is a wrapper around native browser events in React.

 Why React uses Synthetic Events?

Cross-browser compatibility

Same behavior in all browsers

Performance optimization

Uses event delegation internally

Consistent API

Works the same everywhere

 Example:
function handleClick(e) {
  console.log(e); // Synthetic Event object
}
 Important:

Synthetic events behave like real events

But they are controlled by React internally

 Question 2: Common Event Handlers in React (with examples)
 1. onClick Event

 Triggered when user clicks

function App() {
  const handleClick = () => {
    alert("Button Clicked");
  };

  return <button onClick={handleClick}>Click Me</button>;
} 2. onChange Event
 Used in input fields

import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
 3. onSubmit Event

 Used in forms

function App() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("Form Submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
} Bonus Event Handlers

onMouseOver

onKeyDown

onFocus

onBlur

 Question 3: Why bind event handlers in class components?
 The Problem

In class components, this is not automatically bound

 Example:

class App extends React.Component {
  handleClick() {
    console.log(this); // undefined ❌
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
 Why this happens?

Because in JavaScript:

this depends on how a function is called

Not where it is defined

 Solution: Bind this
✔ Method 1: Constructor Binding
class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this); 
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
✔ Method 2: Arrow Function (Best Practice)
class App extends React.Component {
  handleClick = () => {
    console.log(this); // correct ✅
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

Arrow functions automatically bind this