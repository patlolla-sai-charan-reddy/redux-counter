import React, { Component } from "react";

class Redux extends Component {
  render() {
    const { increment, decrement, value } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h5>{value}</h5>
      </div>
    );
  }
}

export default Redux;
