Question 1: What are React Hooks? How do useState() and useEffect() work?
Answer:

Hooks are special functions in React that allow functional components to use features like state and lifecycle methods without writing class components.

useState()

Used to manage state in functional components

Returns a state variable and a function to update it

When the state updates, the component re-renders

It allows components to store and manage dynamic data

useEffect()

Used to handle side effects in components

Runs after the component renders

Common uses:

API calls

Subscriptions

DOM updates

It can also control when to run using a dependency array

Summary:

Hooks enable functional components to handle state and side effects efficiently, replacing the need for class components.
Question 2: What problems did Hooks solve? Why are they important?Answer:

Hooks were introduced to solve several limitations in React:
Problems before Hooks:

Complex and hard-to-maintain class components

Logic duplication across lifecycle methods

Difficulty in reusing stateful logic

Confusing this keyword
How Hooks solve them:

Enable state and lifecycle features in functional components

Allow reuse of logic through custom hooks

Simplify code structure

Improve readability and maintainability



Question 3: What is useReducer? How is it used in a React app?
Answer:

useReducer is a Hook used for managing complex state logic in React applications, especially when state transitions depend on previous state or involve multiple actions.

It follows a pattern similar to Redux:

Uses a reducer function

Accepts state and action

Returns a new state

Purpose:

Better state management for complex logic

Centralized update logic

Improves predictability

Summary:

useReducer is useful when managing complex state changes and provides a structured way to update state.

Question 4: What is the purpose of useCallback & useMemo Hooks?
Answer:

Both useCallback and useMemo are performance optimization hooks used to prevent unnecessary re-renders.

useCallback()

Returns a memoized function

Prevents function recreation on every render

useMemo()

Returns a memoized value

Prevents expensive calculations from running repeatedly



Question 5: Difference between useCallback & useMemo

Answer:
Feature	    useCallback	                            useMemo
Returns	    Function	                            Value
Purpose	    Memoize functions	                    Memoize computed values
Use case	Prevent re-render of child components	Optimize expensive calculations


useMemo → caches result

Question 6: What is useRef? How does it work in a React app?
Answer:

useRef is a Hook used to create a mutable reference that persists across renders without causing re-renders.

Key Uses:

Access DOM elements directly

Store values without triggering re-render

Persist data between renders

Behavior:

Returns an object with a .current property

Updating .current does not re-render the component