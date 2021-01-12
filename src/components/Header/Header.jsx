import React from 'react';
import { Link } from 'react-router-dom';

// logo //
import { ReactComponent as Logo } from '../../Assets/Crown.svg';

// styles //
import './Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/contact" className="option">Contact</Link>
        <Link to="/sign-in" className="option">Sign In</Link>
      </div>

    </nav>
  )
}

export default Header;
