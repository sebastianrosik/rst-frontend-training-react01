import React from 'react';

export default class ItemCounter extends React.Component {
  render() {
    let txt = `${this.props.count} item`;
    if (this.props.count > 1) {
      txt += 's';
    }
    if (this.props.count === 0) {
      txt = 'no items';
    }
    if (this.props.count > 999) {
      txt = '999+ items';
    }
    
    return (
      <span>{txt}</span>
    );
  }
}
