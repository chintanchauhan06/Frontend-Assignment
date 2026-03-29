import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Updated!");
    console.log("Previous Count:", prevState.count);
    console.log("Current Count:", this.state.count);
  }

  componentWillUnmount() {
    console.log("Component Unmounted!");
  }

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;