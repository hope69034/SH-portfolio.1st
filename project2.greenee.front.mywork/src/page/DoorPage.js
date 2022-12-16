import React  from "react";
import DoorCompo from "../components/Door/DoorCompo";
import {  Link } from "react-router-dom";
const DoorPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff">   제 두번째 프로젝트에서 제가 구현한 것 중 일부를 올리는 페이지입니다.</h1>
 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 주제 : 일정관리 x 챗봇 앱 - AI 비서 '그리니' <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 기간 : 2022.11.08. ~ 2022.12.14 <br></br>
 &nbsp;&nbsp;&nbsp;<a href='https://velog.io/@shlog/project.nd'>개발일지 velog</a>
<br></br>
 <DoorCompo></DoorCompo>
    
 </div>


  </>
  )
}

export default DoorPage;
