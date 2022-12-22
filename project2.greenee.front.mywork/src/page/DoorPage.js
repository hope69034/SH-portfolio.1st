import React  from "react";
//import {  Link } from "react-router-dom";
import bb from '../img2/bb.jpeg'
import '../css/DoorCss.css'
const DoorPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff">   &nbsp;&nbsp;&nbsp; 제 두번째 프로젝트에서 제가 구현한 것 중 일부를 <br></br>  올리는 페이지입니다.</h1>
 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 제목 : 일정관리 x 챗봇 앱 - AI 비서 '그리니' <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 기간 : 2022.11.08 ~ 2022.12.14 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 인원 : 6명 (광주인공지능사관학교 3기)<br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 내용 : 일정앱인 그리니는 ai를 활용한 자동 알림/추천을 메인 기능으로 기획되었다. 이 기능을 챗봇에 연동하여 대화형식(버튼, 링크, 대화)<br></br> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 으로 알림/추천을 하고 챗봇과의 대화데이터를 DB에 저장한 후 ai로 분석하여 더 나은 자동 알림/추천을 하겠다는 프로젝트이다.  <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 하지만 기획과는 다르게 알림이 구현되지 못해 발전방향만 장황할 뿐 챗봇의 존재가 무색해진 프로젝트이다.<br></br>
 &nbsp;&nbsp;&nbsp;기술 스택 : react, node.js, html, css, GPT3, bootstrap, netlify<br></br>
 &nbsp;&nbsp;&nbsp;<a target="_blank" href='https://velog.io/@shlog/project.nd'>개발일지 : velog</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://github.com/hope69034/portfolio.1st/tree/main/project2.greenee.front.mywork'>코드 : github</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://greenee.netlify.app/'>앱 프론트엔드 배포 : netlify </a><br></br>
 <br></br>
    
 <div>
    <img src={bb} className='cat1' width='700'></img>
    </div>

 </div>


  </>
  )
}

export default DoorPage;
