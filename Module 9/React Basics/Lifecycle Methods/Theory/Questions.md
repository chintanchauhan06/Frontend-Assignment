Question 1: What are lifecycle methods in React class components? Describe the phases of a component’s lifecycle.Answer:

Lifecycle methods in React class components are special methods that get automatically called at different stages of a component’s life. These methods allow developers to control and perform actions such as data fetching, updating the DOM, and cleaning up resources.

The lifecycle of a React component is divided into three main phases:
1. Mounting Phase (Creation)

This phase occurs when a component is being created and inserted into the DOM.

Common methods in this phase:

constructor()

render()

componentDidMount()
2. Updating Phase

This phase occurs when a component’s state or props change, causing it to re-render.

Common methods in this phase:

render()

componentDidUpdate()

3. Unmounting Phase (Removal)

This phase occurs when a component is removed from the DOM.

Common method in this phase:

componentWillUnmount()

Summary:

Lifecycle methods provide hooks into different phases of a component’s existence, allowing developers to manage side effects, updates, and cleanup operations effectively.

question 2: Explain the purpose of componentDidMount(), componentDidUpdate(), and componentWillUnmount().
Answer:

These are important lifecycle methods used to handle side effects in class components:

componentDidMount()

Called once after the component is mounted (inserted into the DOM).

Used for:

API calls

Fetching data

Setting up subscriptions or timersIt is the best place to perform initial data loading.componentDidUpdate()

Called after the component updates due to changes in state or props.

Used for:

Reacting to data changes

Performing side effects based on updates

Updating the DOM conditionallyMust be used carefully to avoid infinite loops.componentWillUnmount()

Called just before the component is removed from the DOM.

Used for:

Cleaning up (e.g., clearing timers, cancelling API calls, removing event listeners)Prevents memory leaks and unwanted behavior.