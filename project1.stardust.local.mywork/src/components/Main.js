import React from "react";
import prj from '../img/project1.gif'
const Main = () => {
  return(
  <>

<div style={{marginLeft:'20px', marginTop:'10px'}}>
 
 
 <h1 className="ffff">   제 첫번째 프로젝트에서 제가 구현한 것만 올리는 페이지입니다.</h1>
 <br></br> 
 &nbsp;&nbsp;&nbsp;프로젝트 주제 : 두피 자가진단 서비스 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 기간 : 2022.08.16. ~ 2022.09.01 <br></br>
 &nbsp;&nbsp;&nbsp;프로젝트 인원 : 4명 (광주인공지능사관학교 3기)<br></br>
 &nbsp;&nbsp;&nbsp;<a style={{textDecoration: 'none'}} target="_blank" href='https://velog.io/@shlog/%EC%B2%AB%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EA%B8%B0%EB%A1%9D'>개발일지 : velog</a><br></br>
&nbsp;&nbsp;&nbsp;<a style={{textDecoration: 'none'}} target="_blank" href='https://github.com/hope69034/GJAI-Academy-Main/tree/main/%EA%B4%91%EC%A3%BC%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%EC%82%AC%EA%B4%80%ED%95%99%EA%B5%90%202022.08/JS_B_Stardust_Project'>코드 : github</a><br></br>

<br></br>  
<br></br>

 <div>
    <img src={prj} width='1300'></img>
    </div>

    </div>
    <br></br>  <br></br><br></br>  <br></br>
  </>
  )
}

export default Main;
