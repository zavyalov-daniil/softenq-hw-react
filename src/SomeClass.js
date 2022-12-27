import React, { Component } from "react";

export default class SomeClass extends Component {
  constructor() {
    super();
    this.state = {
      color: "red",
      value: '',
      someList: [{ title: "SomeFirstElement" }, { title: "SomeSecondElement"}, { title: "SomeThirdElement" }]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    this.setState({
      someList: this.state.someList.concat([{ title: this.state.value }])
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
        <div style={{ backgroundColor: this.state.color }}>Hello</div>
        {this.counter()}
        {this.renderSomeList()}
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={ this.state.value } onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
