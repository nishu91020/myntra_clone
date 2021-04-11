import React from 'react';
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import PUMAB from '../../images/PUMAB.webp';
import levis from '../../images/levis.webp';
import forever from '../../images/forever.webp';
import UCB from '../../images/UCB.jpg';
import nike from '../../images/nike.webp';
import GAP from '../../images/GAP.webp';
import tommy from '../../images/tommy.jpg';
import USpolo from '../../images/USpolo.webp';
import veromoda from '../../images/veromoda.webp';
import w from '../../images/w.webp';


import mamaearth from '../../images/mamaearth.webp';
import roadster from '../../images/roadster.webp';
import dresses from '../../images/dresses.webp';
import sangira from '../../images/sangira.webp';
import rubans from '../../images/rubans.webp';
import extra from '../../images/extra.webp';
import puma from '../../images/puma.webp';
import Rshirt from '../../images/roadster_shirt.webp';
import shoe from '../../images/shoe.webp';
import personal from '../../images/personal-care.webp';

import Bigcard from '../../components/bigcard';
import Navbar from '../../components/navbar';
import Deals from '../../components/deals';
import Footer from '../../components/footer';
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
          <div className="sticky">
          <Navbar/>
          </div>
          <Slider {...settings} breakPoints={breakPoints}>
              <Bigcard image={mamaearth}/>
              <Bigcard image={roadster}/>
              <Bigcard image={dresses}/>
              <Bigcard image={rubans}/>
              <Bigcard image={sangira}/>
          </Slider>
          <div>
          <div className="deal">Deals of the day</div>
          <div className="deals">
            <Deals image={extra}/>
            <Deals image={puma}/>
            <Deals image={Rshirt}/>
            <Deals image={shoe}/>
            <Deals image={personal}/>
          </div>
          </div>
          <div>
          <div className="deal brand">Best deal on top brands</div>
          <div className="brands">
            <Deals image={PUMAB}/>
            <Deals image={levis}/>
            <Deals image={forever}/>
            <Deals image={UCB}/>
            <Deals image={nike}/>
            <Deals image={GAP}/>
            <Deals image={tommy}/>
            <Deals image={USpolo}/>
            <Deals image={veromoda}/>
            <Deals image={w}/>
          </div>
          </div>
          <Footer/>
        </div>
      );
}
export default Home;