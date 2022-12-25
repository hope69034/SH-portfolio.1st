import React from "react";
import InfobotCompo from "../components/infobot/InfobotCompo";
import 성향봇 from '../gif/성향봇.gif'
import pptt from '../img2/11.png'
import pp from '../img2/pp.png'
const Infobot = () => {
  return (
    <>
          <br></br><br></br>
          <div>
        <img src=  {성향봇} width='700px' ></img> 
      
      </div>
      <br></br>
      <div>
        <img src=  {pptt} width='900px' ></img> 
      
      </div>



      <div className="Readme">
        <br></br>
        <h3>readme</h3>
        <br></br>
        <h5>
          {" "}
          - 기능설명 -<br></br>
          <br></br>
          [Main] 유저 정보를 입력 받아서  
        Router > DB update <br></br>
          시간 입력 받을 때 시간을 나타내는  
        수인지 검증<br></br>
          버튼식입력 또는 텍스트입력<br></br>
          카테고리별 수정 기능 <br></br>
          floatingStyle: floatingStyle, 플로팅 가능 <br></br>
          새로고침 > 봇 아바타 랜덤 7color <br></br>
          랜덤 센텐스 - 인사말 랜덤 3sentence <br></br>
          랜덤 센텐스 - 3개의 문장어레이에서  
       Math.random()로 3문장을 뽑아서  
        합하여 말투에 약간의 베리에이션<br></br>

        <br></br>   <div>
        <img src=  {pp} width='900px' ></img> 
      
      </div>  
    <br></br> 
        

          <br></br>- 라이브러리 - <br></br>
          <br></br>
          ReactSimpleChatbot<br></br>
          <br></br>  <br></br>

         * 사용해 보기
        </h5>
      </div>

      <InfobotCompo></InfobotCompo>
   
    </>
  );
};

export default Infobot;
