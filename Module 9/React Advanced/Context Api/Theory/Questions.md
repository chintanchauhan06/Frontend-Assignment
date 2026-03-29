Question 1: What is the Context API in React? How is it used to manage global state across multiple components?
Answer:

The Context API in React is a built-in feature that allows data to be shared across multiple components without the need to pass props manually at every level (a problem known as prop drilling).

It is primarily used for managing global state, such as user authentication, themes, language settings, or application-wide data that needs to be accessed by many components.

Using the Context API, a central store of data is created and made available to any component in the component tree, regardless of its depth.

How it works:

A context is created to hold the global data.

A Provider component wraps the part of the application that needs access to the data.

The data is passed through the Provider using a value prop.

Any child component can access this data without prop drilling.

Benefits:

Eliminates prop drilling

Simplifies state sharing across components

Improves code readability and maintainability

Summary:

The Context API provides a way to manage and share global state efficiently across multiple components in a React application.

Question 2: Explain how createContext() and useContext() are used in React for sharing state.
Answer:

In React, createContext() and useContext() are used together to create and consume shared state.

createContext()

createContext() is used to create a new context object.

It acts as a container for the shared data.

It returns two components:

Provider → used to supply data

Consumer → used to consume data (less used now)

useContext()

useContext() is a React Hook used to access the value stored in a context.

It allows functional components to directly read and use shared data.

Working Process:

Create a context using createContext().

Wrap components with the Provider.

Pass data using the value prop.

Access data in child components using useContext().