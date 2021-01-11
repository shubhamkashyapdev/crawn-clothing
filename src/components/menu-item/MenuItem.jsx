import React from 'react';
import { withRouter } from 'react-router-dom';

// styles //
import './MenuItem.scss';

export const MenuItem = ({ imageUrl, linkUrl, id, title, size, history, match }) => {

  return (
    <div className={`menu-item ${size ? size : ''}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);