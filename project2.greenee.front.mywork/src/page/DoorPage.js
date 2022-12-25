import React  from "react";
//import {  Link } from "react-router-dom";
import cat1 from '../img2/cat1.png'
import '../css/DoorCss.css'
const DoorPage = () => {


  const sss = {fontSize:'25px',fontWeight:'900'}
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 style={sss} className="ffff" >    제 두번째 프로젝트에서 제가 구현한 것만 올리는 페이지입니다.</h1>
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

 &nbsp;&nbsp;&nbsp;주요 트러블슈팅 : GPT3모델의 말이 중간에 끊어지지 않고 완전한 문장으로 끝나도록 해야한다.<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
예를들면 유저가 '안녕'이라고 하면 모델은 '하세요'라고 대답을 하거나 말을 하다가 문장이
<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 끝나지 않은 상태로 말을 끝내는 경우가 많다.
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 -> 유저인풋의 앞에는 'Human :' 그리고 뒤에는 'Ai : ' 이런식으로 덫붙여서 모델에 넣는다.
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 그러면 '안녕'에 대해 '하세요'처럼 유저의 말을 그대로 이어서 하지도 않고 완전한 문장을 말한다.
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 하지만 말을 하다가 '문장 Human : 문장' 까지 가버리는 경우도 있는데
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 &nbsp;&nbsp;
 -> 이건 stop 파라미터에 Human : 을 넣어서 해결한다. 모델이 Human : 이라고 말할려고 하면 H앞에서 그냥 끝내버리는 것이다.
 <br></br>

 &nbsp;&nbsp;&nbsp;성과 : 달력라이브러리, ui라이브러리, api를 처음 다뤄보고 css도 많이 만져보았다. 
프로젝트 전체로 보면 내가 챗봇으로 빠져서 메인기능 구현이 

<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
 제대로 안된 것 같아 아쉬움이 남지만 개인적으로는 안해본 걸 하면서 얻은 성과가 크다.
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
 그냥 재밌을 것 같아서 시작한 챗봇은 프론트, 백, ai의 재미를 합친 느낌이고 
gpt3를 다룰 수 있게된 것도 큰 성과다. 
<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
 코드 기억 안나서 gpt한테 물어봐서 알아내기도 했다.

 css는 많이해보니까 확실히 내 취향이 아닌 걸 알게되서
 <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
  진로를 정하는 것에도 성과가 있었다. 메모장은 그냥 깃클론으로 받아서 입맛대로 쪼금 고친 건데
  <br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
 리액트에서 바로 돌릴 수 있는 거 찾으려고 고생은 했지만
이것 역시도 그냥 안해본 거라도 검색해서 복붙하면 어떻게든 되겠지
<br></br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
 &nbsp;&nbsp;
라는 자만심과 자신감에 더 빠지게 만들었다.



<br></br>



 &nbsp;&nbsp;&nbsp;기술 스택 : react, node.js, html, css, GPT3, bootstrap, netlify<br></br>
 &nbsp;&nbsp;&nbsp;<a target="_blank" href='https://velog.io/@shlog/project.nd'>개발일지 : velog</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://github.com/hope69034/portfolio.1st/tree/main/project2.greenee.front.mywork'>코드 : github</a><br></br>
&nbsp;&nbsp;&nbsp;<a target="_blank" href='https://greenee.netlify.app/'>앱 프론트엔드 배포 : netlify </a><br></br>
&nbsp;&nbsp;&nbsp;수상 : 인기상<br></br>

    
 <div>
    <img src={cat1} className='cat1' width='700'></img>
    </div>

 </div>


  </>
  )
}

export default DoorPage;
