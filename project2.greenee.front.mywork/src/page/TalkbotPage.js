import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "../components/talkbot/TalkbotCss.css";
import Header from "../components/talkbot/Header";
import Main from "../components/talkbot/Main";
import Footer from "../components/talkbot/Footer";
import 모드체인지봇 from '../gif/모드체인지봇.gif'

import 챗pp from  '../img2/aaa.png'
import 챗p0 from  '../img2/aab.png'
import 챗p1 from  '../img2/챗봇ppt페이지3.png'
import 챗p2 from  '../img2/챗봇ppt페이지4.png'
import icl from  '../img2/icl.png'
import xxx from  '../img2/xxx.png'

const xxxSt= {marginLeft:'20px'}

function TalkbotPage() {
  const [message, setMessage] = useState([
    {
      msg:
        "안녕하세요. AI 비서 그리니입니다. '일상대화, '심리상담', '큐엔에이'를 하고 싶으시면 말씀만 하세요. 대화, 상담, qna라고 말씀하셔도 됩니다. 기본은 대화모드입니다.",
      from: false,
    },
  ]);

  const getMessage = (msg, from) => {
    setMessage((current) => [...current, { msg: msg, from: from }]);
  };

  return (
    <><br></br><br></br>
      <div>
        <img src=  {모드체인지봇} width='700px' ></img> 
      
      </div>
      <br></br>

      <br></br>

      <div>
        <img src=  {챗p0} width='700px' ></img> 
      
      </div>

      <br></br><br></br>
      <div>
        <img src=  {챗p1} width='1000px' ></img> 
      
      </div>

      <br></br>


      <img src=  {xxx} width='800px' style={xxxSt} ></img> <br></br><br></br>


      <div className="Readme">
        <br></br>
        <h3>readme</h3>
        <br></br>
        <h5>
          라이브러리 : 부트스트랩 <br></br>
          모델, api : GPT3, GPT3 fine tuning<br></br>
          파라미터 체인징 기능 : 3가지 mode  
         (  일상대화모드, 심리상담모드, QnA모드 )<br></br>
          &nbsp; 대화/상담/qna 입력시 변경 가능 (모델, 파라미터, 예제, 지시어 변경) <br></br>
          infobot에서 DB로 저장된 유저성향을 axios로 끌어와서 in-context learning에 사용<br></br>
          새로고침 > 봇 아바타 랜덤 7color <br></br>
          로그인한 이름 불러와서 ~님 <br></br>
          학습데이터 : aihub(상담) github(대화) 
       cmu대학(큐엔에이)<br></br>
          학습방법 : in-context learning<br></br>
          <img src=  {챗pp} width='800px' ></img> <br></br><br></br>
          
          <img src=  {icl} width='800px' ></img> <br></br>
         
          <br></br>
          모델평가 SSA<br></br>
          <img src=  {챗p2} width='1000px' ></img> 
          <br></br>
          <br></br>
        </h5>
      </div>
{/* 
      <Header />

      <Main message={message} />

      <Footer setMessage={getMessage} /> */}
    </>
  );
}

export default TalkbotPage;
