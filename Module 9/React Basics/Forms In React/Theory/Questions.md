Question 1: How do you handle forms in React? Explain the concept of controlled components.
Answer:

In React, forms are handled using state management and event handlers such as onChange and onSubmit. The form data is typically stored in the component’s state and updated whenever the user interacts with input fields.

A controlled component is a form element whose value is controlled by React state. This means that the input field does not manage its own state internally; instead, React controls it through the state and updates it via event handlers.

In controlled components:

The value of the input is bound to state.

Any change in the input is handled using an onChange function.

React becomes the single source of truth for form data.

This approach provides better control over form behavior, validation, and data handling.

Question 2: What is the difference between controlled and uncontrolled components in React?
Answer:

The main difference between controlled and uncontrolled components lies in how form data is managed.

🔹 Controlled Components:

Form data is managed by React state.

Uses value and onChange props.

React has full control over the input.

Easier to implement validation, conditional logic, and debugging.

Preferred approach in most React applications.

🔹 Uncontrolled Components:

Form data is managed by the DOM itself.

Uses ref to access input values.

React does not control the input state directly.

Less code but harder to manage and validate.

Useful in simple or quick form implementations.