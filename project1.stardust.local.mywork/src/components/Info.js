import React from "react";
import png1 from '../img/1.png'
import png2 from '../img/2.png'
import png3 from '../img/3.png'
import png4 from '../img/4.png'
import png5 from '../img/5.png'
const Info = () => {
  return (
    <>
      <div style={{ marginLeft: "20px", marginTop: "10px" }}>
        <h1>코드 설명</h1>
      
      
      
        <div>
    <img src={png1} width='700'></img>
    </div>
        
      먼저 모델6개를 load 합니다
      <br></br><br></br>
<br></br>
      <div>
    <img src={png2} width='1200'></img>
    </div>
    <br></br>
    <br></br>
      이 모델들은 각각 미세각질, 피지과다, 모낭사이홍반, 모낭홍반농포, 비듬, 탈모의 중증도를 0~3으로 분류하는 모델입니다.(0 : 정상)
      <br></br>
      <br></br>
      
      <br></br>
      <div>
    <img src={png3} width='1200'></img>
    </div>

    <br></br>
    <br></br>
    유저의 두피이미지를 받아서 모델 6개의 predict값을 뽑습니다.

    <br></br>   <br></br> <br></br>

    <div>
    <img src={png4} width='1200'></img>
    </div>

    <br></br>   <br></br>


aihub 사이트의 진단가이드에 따라, 모델 6개에서 뽑은 6개의 중증도를 종합하여 유저의 두피의 타입을 진단합니다. 

<br></br> <br></br> <br></br>
      

<div>
    <img src={png5} width='800'></img>
    </div>
    <br></br> <br></br>
      유저에게 각 중증도와 두피 타입을 보여주고, solution 버튼을 누르면 유저의 두피 타입에 따른 설명과 맞춤 제품을 추천합니다.
      <br></br> <br></br> <br></br>






      </div>

    </>
  );
};

export default Info;
