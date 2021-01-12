import React, { Component } from 'react';

// component //
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

// shop data //
import SHOP_DATA from './Shop-data';

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const { collections } = this.state;
    console.log(collections);
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...collections }) => (
            <CollectionPreview key={id} {...collections} />
          ))
        }

      </div>
    )
  }
}

export default Shop;