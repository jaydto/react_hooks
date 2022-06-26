import React from 'react';
import {Slide} from "react-slideshow-image"
import palacio from "../images/palacio.jpg"
import 'react-slideshow-image/dist/styles.css'
import "./slideShow.css"
const slideImages = [
  {
    url: palacio,
    caption: 'Slide 1'
  },
  {
    url: palacio,
    caption: 'Slide 2'
  },
  {
    url: palacio,
    caption: 'Slide 3'
  },
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className='slide__size' style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default SlideShow