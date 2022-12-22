import React  from "react";
import z1 from "../img/z1.jpg"; 
import z2 from "../img/z2.jpg"; 
import z3 from "../img/z3.jpg"; 
const GJAIacademyPage = () => {
  return(
  <>
  <br></br> 
  &nbsp;&nbsp;&nbsp;교육 기간 : 2022.06.20 ~ 2022.12.14 <br></br>
  &nbsp;&nbsp;&nbsp;교육 내용 : python, dataScience, ML/DL, JavaScript, node.js, react <br></br>

  <br></br>
 
  <div>
    <img src={z1}   style={{marginLeft:'20px'}} width='1100'></img>
    </div>
    <div>
    <img src={z2}   style={{marginLeft:'20px'}} width='1100'></img>
    </div>
    <div>
    <img src={z3}   style={{marginLeft:'20px'}} width='1100'></img>
    </div>

    <br></br><br></br>
  </>
  )
}

export default GJAIacademyPage;
