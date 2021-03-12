import React from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bigcard from '../../components/bigcard';
import mamaearth from '../../images/mamaearth.webp';
import roadster from '../../images/roadster.webp';
import dresses from '../../images/dresses.webp';
import sangira from '../../images/sangira.webp';
import rubans from '../../images/rubans.webp';
import Navbar from '../../components/navbar';

const Home=()=>{
  const breakPoints=[
    {width:1,itemToShow:1},
    {width:600,itemToShow:2},
    {width:1200,itemToShow:3},
    {width:1800,itemToShow:4},
    {width:2400,itemToShow:5}

]
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
      className: 'notes-slider',
      autoplay: true,
      autoplaySpeed: 7000,
      };
      return (
        <div className="container">
          <Navbar/>
          <Slider {...settings} breakPoints={breakPoints}>
              <Bigcard image={mamaearth}/>
              <Bigcard image={roadster}/>
              <Bigcard image={dresses}/>
              <Bigcard image={rubans}/>
              <Bigcard image={sangira}/>
          </Slider>
          <div className="deal">Deals of the day</div>
        </div>
      );
}
export default Home;