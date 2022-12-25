import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import React from "react";
import "./maincss.css";

import png1 from "../img/111.png";
import png2 from "../img/222.png";
import babycat from "../img/babycat.png";


export default class MainPage extends Component {
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
      <div >
        <h2 style={{ textAlign:'center',color:'#01557d'  }}>  I'm <tt style={{ color:'#ff5e00'  ,fontFamily: 'cursive'  }}>S</tt>ehyoung, The Fearless Developer.</h2>
      
        <h2 style={{ textAlign:'center',color:'#01557d'  }}>  I like to learn new skills.</h2>
       
        &nbsp;&nbsp;&nbsp;Back-End : Python, Node.js, MySQL
     <br></br>
        &nbsp;&nbsp;&nbsp;Front-End : HTML, CSS, JavaScript, React
        <br></br>
        &nbsp;&nbsp;&nbsp;Etc : Git, Github, Slack, AWS EC2, Netlify, GPT3, Chatbot
        <br></br><br></br>
 &nbsp;&nbsp;&nbsp;<a style={{textDecoration: 'none'}} target="_blank" href='https://velog.io/@shlog'>블로그 : velog</a><br></br>
&nbsp;&nbsp;&nbsp;<a style={{textDecoration: 'none'}} target="_blank" href='https://github.com/hope69034'>깃허브 : github</a><br></br>
&nbsp;&nbsp;&nbsp;이메일 : hope69034@gmail.com <br></br>
<br></br>
<div>
                <img src={babycat} width="70%"></img>
              </div>
 
      </div>
    );
  }
}
