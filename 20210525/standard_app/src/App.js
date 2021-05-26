import React, { Component } from "react";
import "./App.css";

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

class ListFilter extends React.Component {
  render() {
    return (
      <div>
        Filter :{" "}
        <input
          type="text"
          ref={(ref) => (this.input = ref)}
          onChange={this.changeFilter.bind(this)}
        />
      </div>
    );
  }

  changeFilter(e) {
    this.props.changeFilter(this.input.value);
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: false };
  }

  changeEditMode() {
    // change editMode state value to true
    this.setState({ editMode: true });
  }

  cancelEdit() {
    // change editMode state value to false, handling onBlur event to input tag
    this.setState({ editMode: false });
  }

  editFin(event) {
    if (event.keyCode === 13) {
      this.props.update(this.props.item.id, this.txt.value);
      this.cancelEdit();
    }
  }

  changeComplete(e) {
    this.props.update(
      this.props.item.id,
      this.props.item.text,
      e.target.checked
    );
  }

  render() {
    const style = {};
    if (this.props.item.complete) {
      style["textDecoration"] = "line-through";
    }
    // add a tag to edit by using a input tag, not a span tag according to editMode value
    const normal = (
      <li>
        <input
          type="checkbox"
          checked={this.props.item.complete}
          onChange={this.changeComplete.bind(this)}
        />
        <span onDoubleClick={this.changeEditMode.bind(this)} style={style}>
          {this.props.item.text}
        </span>{" "}
        - <button onClick={this.removeItem.bind(this)}>DELETE</button>
      </li>
    );
    const edit = (
      <li>
        <input
          type="text"
          defaultValue={this.props.item.text}
          onBlur={this.cancelEdit.bind(this)}
          onKeyUp={this.editFin.bind(this)}
          ref={(ref) => (this.txt = ref)}
          autoFocus
        />
      </li>
    );
    return this.state.editMode ? edit : normal;
  }

  removeItem() {
    this.props.remove(this.props.item.id);
  }
}

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tag = this.props.list
      .filter((obj) => obj.text.includes(this.props.filter))
      .map((obj, index) => (
        <ListItem
          item={obj}
          index={index}
          key={obj.id}
          remove={this.props.remove}
          update={this.props.update}
        />
      ));
    return <ul>{tag}</ul>;
  }
}

class ListApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { app_list: [], filter: "" };
    this.id = 1;
  }

  render() {
    return (
      <div>
        <img src="/img/1.jpg" alt="" width="100px" />
        <div className="box"></div>
        <ListForm addItem={this.addItem.bind(this)}></ListForm>
        <ListFilter changeFilter={this.changeFilter.bind(this)}></ListFilter>
        <List
          list={this.state.app_list}
          remove={this.removeItem.bind(this)}
          update={this.updateItem.bind(this)}
          filter={this.state.filter}
        ></List>
      </div>
    );
  }

  changeFilter(newFilter) {
    this.setState({ filter: newFilter });
  }

  addItem(itemText) {
    this.setState((prevState) => {
      const newList = prevState.app_list.concat({
        id: this.id++,
        text: itemText,
        complete: false,
      });
      return { app_list: newList };
    });
  }

  removeItem(removeId) {
    this.setState((prevState) => {
      const newList = prevState.app_list.filter((obj) => removeId !== obj.id);
      return { app_list: newList };
    });
  }

  updateItem(updateId, item, complete) {
    this.setState((prevState) => {
      const newList = prevState.app_list.map((obj) => {
        if (updateId === obj.id) {
          obj.text = item;
          obj.complete = complete;
        }
        return obj;
      });
      return { app_list: newList };
    });
  }
}

export default ListApp;
