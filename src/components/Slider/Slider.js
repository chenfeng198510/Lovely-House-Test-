import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {

    }
    const prevSlide = () => {

    }

  return (
    <div className='container-slider'>
        {dataSlider.map((obj, index) => {
            return (
                <div className='slide'>
                    <img
                    src= 'img1.jpg'
                    />
                </div>
  )
}
        )}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
  </div>
  )
}
export default Slider;