import React, { Component } from "react";

class App extends React.Component {
  constructor(props) {
    super(props); // props is sent by the parent
    // props.id = "app2"; // TypeError, props is readonly!
    // state : enable to change in component and each component has own state
    // cf) props : only enable to change in the parent component
    this.state = {
      count: 0,
    };
  }

  eventClick() {
    this.setState({ count: this.state.count + 1 });
    // this.props.click();
  }

  render() {
    return (
      <div id={this.props.id} onClick={this.eventClick.bind(this)}>
        {this.props.children} - {this.state.count}
      </div>
    );
  }
}

export default App;
