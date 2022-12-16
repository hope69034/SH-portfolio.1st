import React, { useEffect } from "react";
import Login from "../components/Login";
import MyProfile from "../components/MyProfile";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "../components/FreqCompo/Snackbar";

import Mypage from '../components/Mypage/Mypage'

/* import { Button } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom"; */

export default () => {
  const dispatch = useDispatch();
  // 화면이 랜더링시 confirm에 값이 true일 경우 로그인이 성공했습니다. 라는 알림이 뜨는 구문 
  useEffect(()=>{
    if (isLoggedin) {
      dispatch({type:"SNACKBAR/ON", snackbar: {snackbarToggle:true, explain:"어서오세요!", severity:"success"}});
      dispatch({type:"ISLOGGEDIN", isLoggedin:false});
    } else if (isLoggedout) {
      dispatch({type:"SNACKBAR/ON", snackbar: {snackbarToggle:true, explain:"로그아웃에 성공 했습니다.", severity:"success"}});
      dispatch({type:"ISLOGGEDOUT", isLoggedout:false});
    }
  })
  const session = useSelector(state=>(state.session))
  const isLoggedin = useSelector(state=>(state.isLoggedin))
  const isLoggedout = useSelector(state=>(state.isLoggedout))
  
  return (

    <div>
      {/* <Button onClick={()=>{console.log(session)}}>세션 데이터 확인</Button> */}
      {session.email ? <Mypage /> : <Login />}
      <Snackbar />
      {/* 챗봇버튼 */}
      {/* <Link style={{position:"fixed", bottom:"80px", right:"10px"}} to='/chatbot'> <MessageIcon/> </Link> */}
      {/* <a href='https://hope69034-chatbotgreeni-psychotherapy-toa0l9.streamlit.app/' style={{position:"fixed", bottom:"80px", right:"10px"}}><MessageIcon></MessageIcon></a> */}
    </div>
  );
};
