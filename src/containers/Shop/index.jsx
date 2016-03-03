import React from 'react';

import ShopList from '../../components/ShopList';
import ItemCounter from '../../components/ItemCounter';
import ShopForm from '../../components/ShopForm';

export default class Shop extends React.Component {
  construct() {
    this.addItem = this.addItem.bind(this);
  }
  
  addItem(item) {
    console.log("Add item:", item);
  }
  
  render() {
    return (
      <div>
        <header>
          <h1>Shopping list</h1>
          <ItemCounter count={5}/>
        </header>
        <ShopList/>
        <footer>
          <ShopForm onSubmit={this.addItem} />
        </footer>
      </div>
    )
  }
}
