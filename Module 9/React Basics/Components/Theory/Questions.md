Question 1: What are components in React? Difference between Functional & Class Components

What are Components?

In React, components are independent, reusable building blocks of a UI.

Think of them like:

LEGO blocks  → combine to build a full app

Example:
function Welcome() {
  return <h1>Hello User</h1>;
}

This is a component that returns UI.

Types of Components
1. Functional Components
2. Class Components
Functional Components (Modern Way )

Simple JavaScript functions

function Greeting() {
  return <h1>Hello Chintan</h1>;
}
Features:

Easy to write

Use Hooks (useState, useEffect)

No this keyword

Preferred in modern React

 Class Components (Old Way )

ES6 Classes

import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello Chintan</h1>;
  }
}
                Functional       vs     Class Components
Feature	        Functional	            Class
Syntax	        Simple function	        ES6 class
State	        useState Hook	        this.state
Lifecycle	    useEffect Hook	        lifecycle methods
this keyword	 No	               Yes
Code Length	    Short	                Longer
Usage	        Recommended	       Legacy
🎯 Conclusion

Today:

Functional components + Hooks = Best Practice

Question 2: How do you pass data using props?
🔹 What are Props?

Props (properties) are used to pass data from parent to child components

 Data flow = One-way (Parent → Child)

Example
Parent Component:
function App() {
  return <User name="Chintan" age={21} />;
}
 Child Component:
function User(props) {
  return (
    <h1>
      Name: {props.name}, Age: {props.age}
    </h1>
  );
}
🔹 Destructuring Props (Best Practice)
function User({ name, age }) {
  return <h1>{name} - {age}</h1>;
}
Important Points

✔ Props are read-only
✔ Cannot modify props inside child
✔ Used for dynamic data

Real-Life Example
function Button({ text }) {
  return <button>{text}</button>;
}

<Button text="Login" />
<Button text="Signup" />

Same component → different output

Question 3: Role of render() in Class Components
🔹 What is render()?

In class components, render() is a mandatory method that returns the UI (JSX) to display on the screen.

 Example:
class Welcome extends React.Component {
  render() {
    return <h1>Hello Chintan</h1>;
  }
}
Why is it important?
1. Returns JSX (UI)

Whatever you return → shown in browser

2. Re-renders UI on State/Props change

When:

state changes

props change

 render() runs again automatically

Example:
class Counter extends React.Component {
  state = { count: 0 };

  render() {
    return <h1>{this.state.count}</h1>;
  }
}

If count changes → UI updates

Rules of render()

 Must return JSX
 Must be pure (no side effects)
 Cannot modify state directly