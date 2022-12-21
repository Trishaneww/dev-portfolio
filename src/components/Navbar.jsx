import React from 'react';
import icon from '../images/tezos-silver.png';

const Navbar = () => {

  return (
    <div className="navbar">
        <div className="nav-items">
            <img src={icon} />
            <a className="projects-link" href="/">Projects</a>
            <a className="nav-btn" href="/">Say Hello</a>
        </div>
    </div>
  );
};

export default Navbar;