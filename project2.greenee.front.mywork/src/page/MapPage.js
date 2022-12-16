import React from "react";
import MapCompo from "../components/Map/MapCompo";
const MapPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff"> 라우터에서 출발지와 도착지를 받으면 이동시간을 계산.</h1>
 <br></br>
 &nbsp;&nbsp;&nbsp; (유저의 출발지 도착지 - 두가지 인풋) > 라우터 > child-process 모듈을 통해 두 인풋을 파이썬 파일에 보낸다 > python파일(kakao map api code) 이동시간 계산 > 라우터 > conn.query DB저장 등 활용 <br></br>
 
<br></br>
 <MapCompo></MapCompo>
    
 </div>


  </>
  )
}

export default MapPage;
