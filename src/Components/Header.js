import React from 'react';
import "./Header.css";
import {Link } from "react-router-dom";
import { User } from './User';



 const Header = () => {
   return<> <nav>Daily Goals</nav>
   <div className="header">
    <Link to = "/">Home</Link>
    <Link to = "/about">About</Link>
    <Link to = "/contact">Contact</Link>
    <Link to = "/User/tempId">User</Link>
   </div>
</>
};


export default Header;
