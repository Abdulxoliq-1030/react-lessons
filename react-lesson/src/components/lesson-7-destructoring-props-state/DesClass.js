import React, { Component } from "react";

class DesClass extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          Welcome {name} a.k.a {heroName}
        </h1>
      </div>
    );
  }
}

export default DesClass;
