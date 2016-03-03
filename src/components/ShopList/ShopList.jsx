import React from 'react';

export default class ShopList extends React.Component {
  render() {
    return (
      <div>
        <h2>Shop list</h2>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
