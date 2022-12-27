import React, { Component } from "react";

export default class SomeClass extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      someList: [{ title: "SomeFirstElement" }, { title: "SomeSecondElement"}, { title: "SomeThirdElement" }],
      addCounter: 0,
      deleteCounter: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  renderSomeListItem({ item }) {
    return <div key={item.title}>{item.title}</div>;
  }

  renderSomeList() {
    return this.state.someList.map((item, index) => {
      return this.renderSomeListItem({ item });
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAddSubmit(event) {
    this.setState({
      someList: this.state.someList.concat([{ title: this.state.value }]),
      addCounter: this.state.addCounter + 1
    });
    event.preventDefault();
  }

  handleDeleteSubmit(event) {
    this.setState({
      someList: this.state.someList.slice(0, -1),
      deleteCounter: this.state.deleteCounter + 1
    });
    event.preventDefault();
  }

  counter() {
      return (
        <div>{ this.state.someList.length }</div>
      );
  }

  render() {
    return (
      <div>
        <div> Number of elements: {this.counter()} </div>
        <div> Add counter: { this.state.addCounter } </div>
        <div> Delete counter: { this.state.deleteCounter } </div>
        <div style={{ margin: "20px" }}>
          {this.renderSomeList()}
        </div>
        <form onSubmit={this.handleAddSubmit}>
          <label>
            <input type="text" value={ this.state.value } onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add element" />
        </form>
        <form onSubmit={this.handleDeleteSubmit}>
          <input type="submit" value="Delete element" />
        </form>
      </div>
    );
  }
}
