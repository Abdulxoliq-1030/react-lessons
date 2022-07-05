import React, { Component, PureComponent } from "react";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdulxoliq",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Abdulxoliq",
      });
    }, 2000);
  }

  render() {
    console.log(
      "*******************Parent Component render*******************"
    );
    return (
      <div>
        Parent Component
        <RegularComp name={this.state.name}></RegularComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
