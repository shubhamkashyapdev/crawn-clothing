import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';

// logo //
import { ReactComponent as Logo } from '../../Assets/Crown.svg';

// styles //
import './Header.scss';


const Header = ({ currentUser }) => {
  return (
    <nav className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">Shop</Link>
        <Link to="/contact" className="option">Contact</Link>
        {
          currentUser ?
            <div className="option sign-out" onClick={() => auth.signOut()}> Sign Out</div> :

            <Link to="/sign-in" className="option">Sign In</Link>
        }
      </div>

    </nav>
  )
}

export default Header;
