import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
  <>
    <Link to='/' style={{textDecoration: 'none'}}> &nbsp;&nbsp;Main </Link>
    <Link to='/Gif' style={{textDecoration: 'none'}}> Gif </Link>
    <Link to='/Info' style={{textDecoration: 'none'}}> Info </Link>
    <Link to='/Test' style={{textDecoration: 'none'}}> Test </Link>
    <Link to='/Developmentlog' style={{textDecoration: 'none'}}> Developmentlog </Link>
 
  </>
  )
}

export default Navbar;
