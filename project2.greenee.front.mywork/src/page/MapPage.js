import React from "react";
import MapCompo from "../components/Map/MapCompo";
const MapPage = () => {
  return(
  <>
  <div>
  <br></br>  <br></br>
 
 <h1 className="ffff"> 라우터에서 출발지와 도착지를 받으면 이동시간을 계산.</h1>
 <br></br>
 &nbsp;&nbsp;  (출발지 도착지 - 두가지 인풋을 라우터로 전달) > child-process 모듈을 통해 두 인풋을 python파일로 보낸다 > api로 이동시간을 계산하여 라우터로 전달 > conn.query DB저장 등 활용 <br></br>
 
<br></br>
 <MapCompo></MapCompo>
    
 </div>


  </>
  )
}

export default MapPage;
