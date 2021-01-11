import React from 'react';

// styles //
import './MenuItem.scss';

export const MenuItem = ({ section }) => {
  const { imageUrl, linkUrl, id, title, size } = section;
  return (
    <div className={`menu-item ${size ? size : ''}`}>
      <div style={{
        backgroundImage: `url(${imageUrl})`,
      }} className="background-img" />
      <div className="content">
        <h1 className="title">
          {title}
        </h1>
        <span className="subtitle">
          Shop Now
      </span>
      </div>
    </div>
  )
}

export default MenuItem;