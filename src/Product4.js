import React from 'react';
import ImageSilder from './ImageSilder';
import MultiCarouselDiscount from './MultiCarouselDiscout';

import './Product4.css';


function Product4({data, text1, text2, imgno, imgnoscr}) {
  return (
    <div className='product3'>
    <div className='product3__container'>
    <div className='product3__heading'>

       <div className='product3__headingLineOne'> <span>{text1}</span></div>
       <div className='product3__headingLineTwo'> <span>{text2}</span></div>
         
    </div>
    <div className='product3__multiItemCarousel'><MultiCarouselDiscount  dat = {data} imgno ={imgno} imgnoscr = {imgnoscr}/></div>
    </div>
    </div>
  )
}

export default Product4