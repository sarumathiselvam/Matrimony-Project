import React from 'react'
// import Carousel from 'react-elastic-carousel';
// import styled from 'styled-components'
// import Paper from '@mui/material/Paper';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSliderStyle.css'
import Profile from './Profile';
import CustomNextArrow from './CustomNextArrow';
import CustomPreviousArrow from './CustomPreviousArrow';

function CustomProfileSlider({ profiles }) {
  const settings = {    
    centerMode: true,
    dots: false,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPreviousArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="slider-container">
      <Slider {...settings} >
        {profiles.map((profile, index) => (
          <Profile profile={profile} key={index} />
        ))}
      </Slider>
    </div>
  )
}





export default CustomProfileSlider