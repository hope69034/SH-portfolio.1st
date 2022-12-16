import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return(
  <>
    <Link to='/' style={{}}> &nbsp;&nbsp;Door </Link>
    <Link to='/MemoPage' style={{}}> Memo </Link>
    <Link to='/InfobotPage' style={{}}> Infobot </Link>
    <Link to='/TalkbotPage' style={{}}> Talkbot </Link>
    <Link to='/MapPage' style={{}}> MapApi </Link>
  </>
  )
}

export default Navbar;
