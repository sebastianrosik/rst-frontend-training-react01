import React from 'react';

const formatCount = (count = 0) => {
  let txt = `${count} item`;
  if (count > 1) {
    txt += 's';
  }
  if (count === 0) {
    txt = 'no items';
  }
  if (count > 999) {
    txt = '999+ items';
  }
  return txt;
}
const ItemCounter = (props) => (
  <span>{formatCount(props.count)}</span>
);

ItemCounter.propTypes = {
    count: React.PropTypes.number.isRequired
};

export default ItemCounter;
