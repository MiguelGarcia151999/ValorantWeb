import React from 'react';
import Slider from 'react-slick';
import Breach from '../src/assets/Agentes/Breach.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Agents() {
    let setting = {
        do: true,
        infinite: true,
        speed: 500,
        slideToShow: 12,
        slidesToScroll: 1, 
        cssEase: "linear"
    }

    let AgentImages = {
        Breach: '../src/assets/Agentes/Breach.png'
        
    }
  return (
    <Slider {...setting}>
        <div className='card-wrapper'>
            <div className='card'>
                <div className='card-image'>
                    <img src={AgentImages.Breach} alt="" />
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Agents;
