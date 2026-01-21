Question 1: What is the DOM (Document Object Model) in JavaScript? How does JavaScript interact with the DOM?

Ans : 

The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree-like structure of objects.
Each part of the webpage (elements, attributes, text) becomes a node that JavaScript can access and manipulate.

How JavaScript Interacts with the DOM :

JavaScript interacts with the DOM to read, change, add, or remove HTML elements and styles.


1. Accessing DOM Elements :

JavaScript selects elements using DOM methods :

document.getElementById("title");
document.getElementsByClassName("box");
document.querySelector("p");
document.querySelectorAll(".item");


2. Modifying DOM Content :

let heading = document.getElementById("title");
heading.textContent = "Hello JavaScript";

3. Changing Styles :

heading.style.color = "blue";
heading.style.fontSize = "30px";


4. Adding or Removing Elements :

let para = document.createElement("p");
para.textContent = "New paragraph";
document.body.appendChild(para);

5. Handling Events :

button.addEventListener("click", function () {
  alert("Button clicked");
});



Question 2: Explain the methods getElementById(), getElementsByClassName(), and querySelector() used to select elements from the DOM.

Ans : 

JavaScript provides different methods to select HTML elements from the DOM so we can manipulate them.

1. getElementById()

Purpose :

Selects one element by its unique id.

Example :

<h1 id="title">Hello</h1>

<script>
  let heading = document.getElementById("title");
  console.log(heading.textContent);
</script>


2. getElementsByClassName()

Purpose :

Selects multiple elements with the same class name.

Example :

<p class="text">One</p>
<p class="text">Two</p>

<script>
  let items = document.getElementsByClassName("text");
  console.log(items[0].textContent);
</script>


3. querySelector()

Purpose :

Selects the first matching element using CSS selectors.

Example :

<p class="info">Hello</p>

<script>
  let para = document.querySelector(".info");
  console.log(para.textContent);
</script>