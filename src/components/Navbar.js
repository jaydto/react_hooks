import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navigation">
      <div className="logo1">
        Library Booking
      </div>
      <div className="nav__items1">

        <ul className="nav__list1">
           <Link to="/" className="items1">Login</Link>
        </ul>
        
      </div>
      
    </div>
  );
};

export default Navbar;
