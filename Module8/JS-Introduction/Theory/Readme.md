Question 1: What is JavaScript? Explain the role of JavaScript in web development.

Ans :

What is JavaScript?

JavaScript is a high-level, interpreted, dynamically typed programming language mainly used to make web pages interactive and dynamic.
It runs directly in the web browser and does not require compilation.

Originally, JavaScript was created to add behavior to web pages, and today it is one of the core technologies of the web, along with HTML and CSS.

HTML → Structure
CSS → Design & Layout
JavaScript → Behavior & Interactivity

1. Adds Interactivity :

JavaScript allows users to interact with web pages.

Button clicks
Form validation
Dropdown menus
Pop-ups and alerts

2. Manipulates HTML & CSS (DOM Manipulation)

JavaScript can change content, styles, and structure of a webpage without reloading it.

Example:
document.getElementById("title").style.color = "red";

3. Makes Web Pages Dynamic

JavaScript can update content in real time.
Live search
Auto-updating clocks
Chat applications

4. Client-Side Validation :

JavaScript validates user input before sending data to the server, improving performance and user experience.

Example:

if(password.length < 6){
  alert("Password too short");
}

5. Server-Side Development :

With environments like Node.js, JavaScript can also run on the server.

Build APIs
Handle databases
Create full-stack applications

6. Used in Frameworks & Libraries :

JavaScript powers popular frameworks like:

React
Angular
Vue
Next.js



Question 2: How is JavaScript different from other programming languages like Python orJava?

Ans :


| Feature         | JavaScript               | Python                      | Java               |
| --------------- | ------------------------ | --------------------------- | ------------------ |
| **Execution**   | Runs in browser & server | Mainly server-side          | Mainly server-side |
| **Typing**      | Dynamically typed        | Dynamically typed           | Statically typed   |
| **Compilation** | Interpreted              | Interpreted                 | Compiled           |
| **Main Use**    | Web development          | Data science, AI, scripting | Enterprise apps    |
| **Syntax**      | C-like, flexible         | Simple & readable           | Strict & verbose   |
| **Concurrency** | Event-driven, async      | Multi-threading             | Multi-threading    |


Key Differences Explained :

1. JavaScript vs Python

JavaScript is event-driven and designed for browsers
Python is mainly used for data science, AI, automation
JavaScript handles asynchronous operations using callbacks, promises, async/await

Example (JavaScript async):

fetch(url).then(res => res.json());

2. JavaScript vs Java :

JavaScript is not related to Java (only name is similar)
Java is statically typed, JavaScript is dynamically typed
Java needs compilation, JavaScript runs directly in browser

3. Platform Dependency :

JavaScript runs inside the browser
Python and Java usually need runtime environments



Question 3: Discuss the use of <script> tag in HTML. How can you link an external JavaScript file to an HTML document?

Ans :

Use of <script> Tag
The <script> tag is used to embed or link JavaScript code inside an HTML document.
It tells the browser:
“This is JavaScript code — execute it.”

1. Internal JavaScript (Inside HTML) :

<script>
  alert("Hello World");
</script>

Usually placed:

Inside <head> or
Before closing </body> tag (recommended)

2. External JavaScript :

Step 1: Create a JavaScript file
// script.js
console.log("External JS file loaded");

Step 2: Link it in HTML :

<script src="script.js"></script>

This is usually placed before </body> to ensure HTML loads first.

Advantages of External JavaScript :


Better code organization
Reusable across multiple pages
Faster loading (browser caching)

Cleaner HTML :
Using defer Attribute
<script src="script.js" defer></script>
Ensures HTML loads first
JavaScript executes after DOM is ready

Using async Attribute :

<script src="script.js" async></script>

Loads JS asynchronously
Executes immediately after download (not order-safe)


