import React,{useState} from 'react';


import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ImageSilder({slides}) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide1 = () => {
      setCurrent(current === length -1 ? 0 : current + 1);
    };

    const prevSlide1 = () => {
      setCurrent(current === 0 ? length - 1: current - 1);
    }

    console.log(current);

    if(!Array.isArray(slides) || slides.length <= 0){
      return null;
    }

  return (<section className='slider'>
      {slides.map((slide,index) => {
        return(
          <div className={index === current ? 'slide_active' : 'slide'} key ={index}>
            
            {index === current && ( <img src={slide?.image} alt="front-image" className='image' />
            )}

           
          </div>
           
        )
    })
    }
    <ArrowBackIosIcon className='left-arrow1' onClick={prevSlide1} />
      <ArrowForwardIosIcon className='right-arrow1'  onClick={nextSlide1}/>
    </section>
  )
}

export default ImageSilder