import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Abdulxoliq",
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {
   console.log("LifecycleA getSnapshotBeforeUpdate");
   return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
        name: 'Codevolution'
    })
  }

  render() {
    console.log("Lifecycle A render");
    return (
      <>
        <div> Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;
