import React, {useState} from "react";

import { Images } from "./Images";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Carousel = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length; 
    
    const next = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const previous = () => {
        setCurrent(current ===  0 ? length - 1 : current - 1)
    };

    
    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
  return(
      <>
      <div className="carousel">
          
          <FaAngleLeft className="prev"  onClick={previous} />
          <FaAngleRight className="next" onClick={next} />
          {Images.map((slide, index) => {
              return(
                  <div className={index === current ? 'slide active': 'slide'} key={index}>
                      {index === current && (<img src={slide.image} alt='sneakers'  className="images" />)}
                      
                  </div> 
              )
              
              
          })}
      </div>
      </>
  )
}

export default Carousel;