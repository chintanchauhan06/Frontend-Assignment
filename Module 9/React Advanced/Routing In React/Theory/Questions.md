Question 1: What is React Router? How does it handle routing in single-page applications?
Answer:

React Router is a library used in React applications to enable navigation between different components or views without reloading the entire page.

In a Single Page Application (SPA), instead of loading new HTML pages from the server, React Router dynamically renders components based on the current URL.

How it handles routing:

React Router uses the browser’s History API to keep the UI in sync with the URL. When the URL changes:

It matches the URL path with defined routes

It renders the corresponding component

It updates the view without refreshing the page

Key Concept:

Routing is handled on the client side, not the server

Only specific parts of the UI update instead of the whole page

Summary:

React Router enables seamless navigation in SPAs by mapping URLs to components and updating the UI dynamically without full page reloads.

Question 2: Explain the difference between BrowserRouter, Route, Link, and Switch components in React Router.
Answer:

These are core components of React Router, each with a specific role:

BrowserRouter

Acts as the main router wrapper for the application

Uses the browser’s History API

Wraps the entire app to enable routing

It provides routing context to all child components

Route

Used to define a mapping between a URL path and a component

When the path matches, the component is rendered

It controls what to show based on URL

Link

Used for navigation between routes

Works like an <a> tag but without reloading the page

Enables client-side navigation

Switch (React Router v5)

Renders only the first matching Route

Prevents multiple components from rendering for similar paths

Improves routing 