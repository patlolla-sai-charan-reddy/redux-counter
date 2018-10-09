import React, { Component } from "react";

class Redux extends Component {
  render() {
    const { increment, decrement, value } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>{value}</h1>
      </div>
    );
  }
}

export default Redux;
