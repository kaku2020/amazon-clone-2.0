import React from 'react';
import './Product1.css'

function Product1({id, title, img1,img2,img3,img4,des1,des2,des3,des4,link}) {
  return (
    <div className='product1'>
      <div className='product1__title'>{title}</div>
      <div className='product1__productAlign'>
      <div className='product1__info'>
      <div className='product1__infoProduct1'>
      <img className='product1__image' src ={img1} alt=""/>
      </div>
      <span className='product1__infoText'>{des1}</span>
      <div className='product1__infoProduct1'>
      <img className='product1__image' src ={img2} alt=""/>
      </div>
      <span  className='product1__infoText'>{des2}</span>     
      </div>
      <div className='product1__info'>
      <div className='product1__infoProduct1'>
      <img className='product1__image' src ={img3} alt=""/>
      </div>
      <span  className='product1__infoText'>{des3}</span>
      <div className='product1__infoProduct1'>
      <img className='product1__image' src ={img4} alt=""/>
      </div>
      <span  className='product1__infoText'>{des4}</span>
      </div>
      </div>
      <div><span className='product1__link'>{link}</span></div>
    </div>
   
  )
}

export default Product1