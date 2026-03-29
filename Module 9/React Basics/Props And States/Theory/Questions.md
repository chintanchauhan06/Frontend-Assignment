Question 1: What are props in React.js? How are props different from state?
What are Props?

In React, props (properties) are used to pass data from a parent component to a child component.

Props are read-only (immutable)

Example:
function App() {
  return <User name="Chintan" age={21} />;
}

function User(props) {
  return <h1>{props.name} - {props.age}</h1>;
}
Props vs State : 

Feature	        Props	                        State
Definition	    Data passed from parent	        Data managed inside component
Mutability	    ❌ Read-only	                    ✅ Can be changed
Control	        Parent controls                 Component controls
Purpose	        Communication                       	Dynamic 
Example	<User name="Chintan" />	count = 0
Key Difference

Props = external data
State = internal data

Question 2: Concept of State in React
What is State?

State is a built-in object used to store dynamic data that can change over time.
When state changes → UI automatically updates (re-render)
Example (Functional Component)
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}How State Works (Step-by-Step)

Initial state → count = 0

User clicks button

setCount() updates state

Component re-renders

UI updates automatically

Key Features of State
Managed inside componentCauses re-renderUsed for dynamic UICannot update directly

Wrong:
count = count + 1;
Correct:
setCount(count + 1);
Example Use Cases

Counter apps

Form inputs

Toggle (dark/light mode)

API data display

Question 3: Why this.setState() is used in Class Components?
What is setState()?

In class components, this.setState() is used to update the component’s state and re-render the UI.

Example:
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increase</button>
      </>
    );
  }
}
Why not update state directly?
Wrong:
this.state.count = this.state.count + 1;

Problems:

UI will NOT update

React won’t detect change

How setState() Works Internally
Step-by-step:

You call:

this.setState({ count: 1 });

React schedules update (async)

React merges new state with old state

Component re-renders

UI updates

Important Concepts
1. Asynchronous Nature

setState() does NOT update immediately

2. State Merging
this.setState({ name: "Chintan" });

Only updates name, not full state

3. Functional setState (Best Practice)
this.setState((prevState) => ({
  count: prevState.count + 1
}));

Used when new state depends on old state