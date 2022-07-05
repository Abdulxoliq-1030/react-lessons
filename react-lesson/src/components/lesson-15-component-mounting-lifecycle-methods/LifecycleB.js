import React, { Component } from 'react'

 class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: 'Abdulxoliq'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state) {
       console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

  render() {
    console.log('Lifecycle B render')
    return (
      <div>
     Lifecycle B
      </div>
    )
  }
}

export default LifecycleB