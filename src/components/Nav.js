import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.css';

const Nav = ({ selectedUserDetails }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Task1</Link>
        </li>
        <li>
          <Link to="/task2">Task2</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Nav;
