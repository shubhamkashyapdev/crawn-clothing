import React from 'react';

import './CollectionPreview.scss';

// components //
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items.filter((item, index) => index < 4).map(item => (
            <CollectionItem {...item} key={item.id} />
          ))
        }

      </div>
    </div>
  )
}

export default CollectionPreview;
