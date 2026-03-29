Question 1: How do you render a list of items in React? Why is it important to use keys?
Answer:

In React, lists are rendered by iterating over an array of data using JavaScript methods such as .map(), which returns a new array of JSX elements. Each element in the list is then displayed dynamically in the UI.

Keys are important because they help React identify which items in the list have changed, been added, or been removed. This allows React to efficiently update the DOM using its reconciliation process, rather than re-rendering the entire list.

Without keys, React cannot properly track elements, which may lead to performance issues and incorrect UI updates.

Question 2: What are keys in React, and what happens if you do not provide a unique key?
Answer:

Keys in React are special attributes assigned to elements in a list to uniquely identify each element among its siblings. They provide a stable identity to elements, which helps React optimize rendering during updates.

If unique keys are not provided:

React will display a warning indicating that each child should have a unique key.

The reconciliation process becomes inefficient because React cannot correctly match old and new elements.

This may result in unnecessary re-renders, degraded performance, and potential UI bugs such as incorrect data being displayed or improper state handling.