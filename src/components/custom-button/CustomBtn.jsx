import React from 'react';

// styles //
import './CustomBtn.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn && 'google-sign-in'} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomBtn;
