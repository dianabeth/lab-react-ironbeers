import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">
            <img src="/images/home-logo.png" alt="Home" />
          </Link>
        </nav>
      </div>
    );
  }
}

export default Header;
