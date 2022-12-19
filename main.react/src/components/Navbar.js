import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
  <>
    <Link to='/' style={{textDecoration: 'none'}}> &nbsp;&nbsp;Main </Link>
    <Link to='/Project' style={{textDecoration: 'none'}}> Project </Link>
    <Link to='/GJAIacademy' style={{textDecoration: 'none'}}> GJAIacademy </Link>
  </>
  )
}

export default Navbar;
