import React, { Component } from "react";

export default class SomeClass extends Component {
  constructor() {
    super();
    this.state = { color: "red", someList: [{ title: "SomeFirstElement" }, { title: "SomeSecondElement"}, { title: "SomeThirdElement" }] };
  }

  renderSomeListItem({ item }) {
    return <div key={item.title}>{item.title}</div>;
  }

  renderSomeList() {
    return this.state.someList.map((item, index) => {
      return this.renderSomeListItem({ item });
    });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: this.state.color }}>Hello</div>
        {this.renderSomeList()}
      </div>
    );
  }
}
