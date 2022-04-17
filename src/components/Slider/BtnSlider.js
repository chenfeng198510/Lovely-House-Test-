import React from 'react'
import './Slider.css'
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';

export default function BtnSlider
({direction, moveslide}) {console.log(direction, moveslide);
  return (
    <button className='btn-slide'>
        <img 
        src={rightArrow} 
        />
        
    </button>
  );
}
