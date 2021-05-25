import React, { Component } from "react";

class ListForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.addItem.bind(this)}>
        <input type="text" ref={(ref) => (this.input = ref)}></input>{" "}
        <button>ADD</button>
      </form>
    );
  }

  addItem(event) {
    event.preventDefault();
    // alert(this.input.value);
    this.props.addItem(this.input.value);
    // Initialize input value
    // # 1
    // this.input.value = "";
    // # 2
    event.target.reset();
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        {this.props.text} -{" "}
        <button onClick={this.removeItem.bind(this)}>DELETE</button>
      </li>
    );
  }

  removeItem() {
    this.props.remove(this.props.index);
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tag = this.props.list.map((obj, index) => (
      <ListItem text={obj} index={index} remove={this.props.remove}></ListItem>
    ));
    return <ul>{tag}</ul>;
  }
}

class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { app_list: ["A", "B", "C"] };
  }

  render() {
    return (
      <div>
        <ListForm addItem={this.addItem.bind(this)}></ListForm>
        <List
          list={this.state.app_list}
          remove={this.removeItem.bind(this)}
        ></List>
      </div>
    );
  }

  addItem(text) {
    this.setState((prevState) => {
      const newList = prevState.app_list.concat(text);
      return { app_list: newList };
    });
  }

  removeItem(removeIndex) {
    this.setState((prevState) => {
      const newList = prevState.app_list.filter(
        (obj, index) => index !== removeIndex
      );
      return { app_list: newList };
    });
  }
}

export default ListApp;
