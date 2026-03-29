Question 1: What is Conditional Rendering in React?
Definition

In React, conditional rendering means displaying different UI elements based on conditions.

Just like JavaScript conditions (if, else), but applied to UI.

Why it is used?

Show/hide elements

Display data based on user actions

Handle login/logout UI

Show loading, error, success states

Example (Basic Concept)
function App() {
  const isLoggedIn = true;

  return (
    <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
  );
}
Real-Life Example
function App() {
  const isLoggedIn = false;

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login />}
    </>
  );
UI changes based on Question 2: Ways to do Conditional Rendering 1. Using if-else (Outside JSXYou cannot write if directly inside JSX, but you can use it before return.

Example:

function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}
Another Example:
function App() {
  let message;

  if (true) {
    message = <h1>Hello</h1>;
  } else {
    message = <h1>Bye</h1>;
  }

  return message;
2. Ternary Operator Best for inline conditionsSyntax:
condition ? trueValue : Example:
function App() {
  const isLoggedIn = true;

  return (
    <h1>
      {isLoggedIn ? "Welcome Back" : "Please Login"}
    </h1>
  );
}
Component Rendering:

{isLoggedIn ? <Dashboard /> : <Login />}3. Logical AND (&&) Operator
Used when you want to show something only if condition is true

Syntax:

condition && expressionExample:
function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn && <h1>Welcome User</h1>}
    </>
  );
}

If true → shows UI
If false → nothing rendered

Important Edge Case
{0 && <h1>Hello</h1>}

Output: 0 (not expected)

✔ Always ensure condition is boolean

Bonus: Multiple Conditions
function App() {
  const role = "admin";

  return (
    <>
      {role === "admin" ? (
        <AdminPanel />
      ) : role === "user" ? (
        <UserPanel />
      ) : (
        <Guest />
      )}
    </>
  );
}