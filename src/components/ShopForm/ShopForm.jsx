import React from 'react';

export default class ShopForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    event.preventDefault();
    let value = this.refs.inputVal;
    console.log(value);
    this.props.onSubmit(value);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input ref="inputVal" type="text" name="item"/>
        <button type="submit">Add</button>
      </form>
    );
  }
}
