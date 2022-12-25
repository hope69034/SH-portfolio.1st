import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import React from "react";
import "./projectcss.css";

import png1 from "../img/111.png";
import png2 from "../img/222.png";

export default class ProjectPage extends Component {
  render() {
    const settings = {
   dots: true,    

      /*       dotsClass: "slick-dots slick-thumb", */
      /*     infinite: true, */
      /*   fade: true, */
      speed: 1000,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      centerPadding: '0px', 
      /*    adaptiveHeight: true, */
      /*   centerMode:true,  */
      /*    variableWidth: true, */

      /*    const settings = {
    dots: true, // 개수 표시 점
    infinite: true, // 무한 캐러셀
    speed: 500, // 다음 컨텐츠 까지의 속도
    slidesToShow: 3, // 화면에 보이는 컨텐츠 수
    slidesToScroll: 1, // 스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: '10px', // 중앙 컨텐츠 padding 값
    autoplay: true, // 자동 캐러셀
    autoplaySpeed: 2000, // 자동 캐러셀 속도
    draggable: false // 드래그      
    fade: false, // 사라졌다 나타나는 효과
    arrows: true, // 좌,우 버튼
    vertical: false, // 세로 캐러셀
    initialSlide: 1, // 첫 컨텐츠 번호
    pauseOnFocus: true, // focus시 정지
    pauseOnHover: true, // hover시 정지
    responsive: [ // 반응형 옵션 
    {
        breakpoint: 480, // (숫자)px 이하일 경우
          settings: {
             slidesToShow: 1,
            arrows:true,
      }
    }
    ]
  }; */
    };
    return (
      <div style={{  marginLeft: "20%",marginRight: "20%"}}>
        <h2 style={{ textAlign:'center',color:'#01557d'  }}> Project </h2>
        
          <Slider {...settings}>
          <div>
            <a target="_blank" href="https://sh-project1st.netlify.app/">
              {" "}
              <div>
                <img src={png1} width="700"></img>
              </div>
            </a>
          </div>

          <div>
            <a target="_blank" href="https://sh-project2nd.netlify.app/">
              {" "}
              <div>
                <img src={png2} width="700"></img>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}
