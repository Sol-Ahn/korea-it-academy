import React, { Component } from "react";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: "안솔", age: 20 },
        { id: 2, name: "안술", age: 30 },
        { id: 3, name: "안실", age: 40 },
      ],
    };
  }

  render() {
    const itemList = this.state.list.map((item, index) => {
      return (
        <li key={item.id}>
          {item.name} : {item.age}
        </li>
      );
    });

    return (
      <div>
        <button onClick={this.addItem.bind(this)}>Add Item</button>
        <ul>{itemList}</ul>;
      </div>
    );
  }

  addItem() {
    const item = {
      name: "test",
      age: Math.ceil(Math.random() * 20) + 20,
      id: Math.ceil(Math.random() * 30),
    };
    // const list = this.state.list;
    // list.push(item);
    // const newList = list.concat(item);
    // console.log("the list saved in state ", list);
    // console.log("the new list after concat", newList);
    // this.setState({ list: list.concat(item) });
    this.setState({ list: this.state.list.concat(item) });
  }
}

export default List;
