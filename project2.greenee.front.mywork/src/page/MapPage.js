import React from "react";
import bb from '../img2/bb.jpeg'
import mapsc from '../img2/mapsc.png'
import t1 from '../img2/t1.png'
import t2 from '../img2/t2.png'
const MapPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff"> 라우터에서 출발지와 도착지를 받으면 이동시간을 계산.</h1>
 <br></br>
 &nbsp;&nbsp;&nbsp;  (출발지 도착지 - 두가지 인풋을 라우터로 전달) > child-process 모듈을 통해 두 인풋을 python파일로 보낸다 > 이동시간을 
 <br></br> &nbsp;&nbsp;&nbsp;&nbsp;계산하여 다시 라우터로 전달 > conn.query DB저장 등 활용 <br></br>
 <br></br>
 &nbsp;&nbsp;&nbsp;  * 팀원이 작성한 python코드를 본 앱인 react코드로 못 바꾸는 중에, 난  
 그냥 child-process로 python파일 그대로 쓸 수 있어서 연결만 한 것. <br></br>
<br></br>

<div>
    <img src={mapsc} className='cat1' width='700'></img>
    </div>

 
    <br></br><br></br>
    <div>
    <img src={t1} className='cat1' width='700'></img>
    </div>
    <br></br><br></br>

    <div>
    <img src={t2} className='cat1' width='700'></img>
    </div>

    
 </div>




  </>
  )
}

export default MapPage;
