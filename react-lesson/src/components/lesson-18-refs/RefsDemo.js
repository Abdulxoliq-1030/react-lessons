import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inpuRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }
    // this.inpuRef.current.focus();
    // console.log(this.inpuRef);
  }

  clickHandler = () => {
    alert(this.inpuRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inpuRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
