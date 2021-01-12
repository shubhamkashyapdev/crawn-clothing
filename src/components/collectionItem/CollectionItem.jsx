import React from 'react';

// styles //
import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{
        background: `url(${imageUrl})`,
        backgroundSize: 'cover'
      }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

    </div>
  )
}


export default CollectionItem;
