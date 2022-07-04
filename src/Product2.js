import React from 'react';
import './Product2.css'

function Product2({id, title, img, link}) {
  return (
    <div className='product2'>
        <div className='product2__base'>
        
            <span className='product2__titleText '>{title}</span>
        
            <div className='image__container'>
            <img className='product2__icon' src =  {img} alt="/" />
            </div>
            <span className='product2__link'>{link}</span>
    </div>
    </div>
  )
}

export default Product2