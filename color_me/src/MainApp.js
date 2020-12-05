import React from 'react';
import './App.css';
import logo from './colorMe-logo.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from './slider/1.png';
import img1c from './slider/1c.png';
import img2 from './slider/2.jpg';
import img2c from './slider/2c.jpg';
import img3 from './slider/3.png';
import img3c from './slider/3c.png';
import img4 from './slider/4.jpg';
import img4c from './slider/4c.jpg';
import Slider from "react-slick";

export default class MainApp extends React.Component {
  
  render(){
  return (
    <div className="App">

        <div className="App-left-side">
        <h1>ColorMe</h1>
        <p>Jest to aplikacja przeglądarkowa, która wykorzystuje sztuczną inteligencję do kolorowania zdjęć i rysunków. Obrazy na wejściu mogą być w skali szarości albo zawierać same kontury. Na wyjściu otrzymujemy kolorowy obraz.</p>
         <Slider {...{dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
               autoplay: true,
               pauseOnHover:false,
               arrows:false
            }}>
            <div className="slider-container">
              <img src={img1} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img1c} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img2} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img2c} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img3} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img3c} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img4} className="slider-img"/>
            </div>
            <div className="slider-container">
              <img src={img4c} className="slider-img"/>
            </div>
          </Slider>
  
        </div>
        <div className="App-right-side">
          <img src={logo} className="App-logo"/>
          <div className="Button-container">
            <a href="/uploadPhoto" className="App-button">
              Chcę pokolorować zdjęcie
            </a>
            <a href="/uploadLineart" className="App-button">
            Chcę pokolorować lineart
            </a>
          </div>
        </div>
     
    </div>
  );
}
}