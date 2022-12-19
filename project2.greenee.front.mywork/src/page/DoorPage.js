import React  from "react";
//import {  Link } from "react-router-dom";
import bb from '../img2/bb.jpeg'
import '../css/DoorCss.css'
const DoorPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff">   제 두번째 프로젝트에서 제가 구현한 것 중 일부를 올리는 페이지입니다.</h1>
 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 주제 : 일정관리 x 챗봇 앱 - AI 비서 '그리니' <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 기간 : 2022.11.08. ~ 2022.12.14 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 인원 : 6명 (광주인공지능사관학교 3기)<br></br>
 &nbsp;&nbsp;&nbsp;<a target="_blank" href='https://velog.io/@shlog/project.nd'>개발일지 : velog</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://github.com/hope69034/portfolio.1st/tree/main/project2.greenee.front.mywork'>코드 : github</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://greenee.netlify.app/'>앱 프론트엔드 배포 : greenee </a><br></br>
 
    
 <div>
    <img src={bb} className='cat1' width='700'></img>
    </div>

 </div>


  </>
  )
}

export default DoorPage;
