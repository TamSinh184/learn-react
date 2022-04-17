import React, { Component } from "react";

class AddComponent extends Component {
  render() {
    return (
      <h1>
        Total: {this.props.number1} + {this.props.number2}
      </h1>
    );
  }
}

export default AddComponent;
