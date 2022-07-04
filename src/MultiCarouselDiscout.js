import React from 'react';
import './MultiCarouselDiscount.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const PreviousBtn = (props) => {
  console.log(props);
  const {className, onClick} = props;
  return(
    <div className={className}  onClick = {onClick}>
      <ArrowBackIos  style = {{color : "blue", fontSize : '20px'}}/>
    </div>
  )
}

const NextBtn = (props) => {
  const {className, onClick} = props;
  return(
    <div className={className}  onClick = {onClick}>
      <ArrowForwardIos  style = {{color : "blue" , fontSize : '20px'}}/></div>
  )
}

function MultiCarouselDiscount({dat, imgno, imgnoscr}) {
  return (
    <div className='multiitemcarousel'>
    <div className='multiitemcarousel__slider'></div>
        <Slider autoplay= {2000} dots prevArrow={<PreviousBtn/>} nextArrow = {<NextBtn/>} slidesToShow = {imgno} infinite = {false} slidesToScroll = {imgnoscr}>
            {dat?.map((item)=> (
                <Card item  ={item}/>
            //  <div className='multiitem__carousel'>
            //   <img src = {item?.image} alt=""  style={{width:"240px" , height : '180px', objectFit :'contain'}} />
            //  </div> 
            ))

            }
        </Slider>
    </div>
  )
}

const Card = ({item})=>{
    return(
        <div className='multiitem__carousel'>
        <img src = {item?.image} className = 'multi__image'alt=""  style={{width:"240px" , height : '180px', objectFit :'contain'}} />
        <div className=''> 
        <span className='multiitem__carouselspan1'style={{width:"80px", height: "40px "}}>{item?.disc}</span>
        <span className='multiitem__carouselspan2'>Deal Of the Day</span>
        </div>
        </div>
    )
}

export default MultiCarouselDiscount