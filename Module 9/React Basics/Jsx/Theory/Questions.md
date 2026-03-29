Question 1: What is JSX in React.js? Why is it used?


JSX (JavaScript XML) is a syntax extension of JavaScript used in React that allows you to write HTML-like code inside JavaScript.

Example:

const element = <h1>Hello World</h1>;

Behind the scenes

JSX is not understood by browsers directly. It gets converted into JavaScript using tools like Babel.

Converted code:

const element = React.createElement("h1", null, "Hello World");

=> Why JSX is used?

1. Readability 

Looks like HTML → easy to understand

2. Write UI Faster 

No need for document.createElement()

3. Better Developer Experience

Less code, more clarity

4. Powerful Integration

Combine HTML + JS logic in one place

=>Without JSX (hard way):
const element = React.createElement("h1", null, "Hello");

=>With JSX (easy way):
const element = <h1>Hello</h1>;


Question 2: How is JSX different from regular JavaScript? Can you write JavaScript inside JSX?

 JSX vs JavaScript :

Feature	        JSX	Regular         JavaScript
Syntax	        HTML-like	        Pure JS
Readability	    High	            Lower for UI
Usage	        UI building	        General logic
Compilation	    Needs Babel	       Runs directly

Key Difference:

JSX = Syntactic sugar over JavaScript

It makes UI code easier but ultimately becomes JS.

 Can you write JavaScript inside JSX?
 YES — using {} (curly braces)

Example:

const name = "Chintan";

const element = <h1>Hello {name}</h1>;

✔ Output:

Hello Chintan

 You can write:

✔ Variables
<h1>{name}</h1>
✔ Expressions
<h1>{5 + 5}</h1>
✔ Functions
<h1>{getName()}</h1>
✔ Conditions
<h1>{isLoggedIn ? "Welcome" : "Login"}</h1>

 You cannot write:

if statements directly

loops like for

Wrong:

<h1>{if (true) { return "Hi" }}</h1>

Correct:

<h1>{true ? "Hi" : "Bye"}</h1>


Question 3: Importance of Curly Braces {} in JSX
 What do {} do?

Curly braces allow you to embed JavaScript inside JSX

 Why are they important?

1. Dynamic Content
const name = "Chintan";
<h1>Hello {name}</h1>

2. Expressions Evaluation
<h1>{10 * 2}</h1>

3. Conditional Rendering
<h1>{isLoggedIn ? "Dashboard" : "Login"}</h1>

4. Rendering Lists
const items = ["A", "B", "C"];

<ul>
  {items.map(item => <li>{item}</li>)}
</ul>

5. Inline Styling
<h1 style={{ color: "red", fontSize: "20px" }}>
  Hello
</h1>

Note:

Outer {} → JavaScript

Inner {} → Object