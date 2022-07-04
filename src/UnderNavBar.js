import React from 'react';
import './UnderNavBar.css';
import DehazeIcon from '@mui/icons-material/Dehaze';

function UnderNavBar() {
  return (
    <div className='nav__main'>
        <div className='nav__left'>
              <DehazeIcon/>
            <span className='nav__leftText'>All</span>
        </div>
        <div className='nav__fill'>
            <span className='nav__fillText'>Best Sellers</span>
            <span className='nav__fillText'>Mobiles</span>
            <span className='nav__fillText'>Customer Service</span>
            <span className='nav__fillText'>Today's Deal</span>
            <span className='nav__fillText'>Fashion</span>
            <span className='nav__fillText'>Electronics</span>
            <span className='nav__fillText'>Prime</span>
            <span className='nav__fillText'>Home Kitchen</span>
            <span className='nav__fillText'>New Releases</span>
            <span className='nav__fillText'>Amazon Pay</span>
            <span className='nav__fillText'>Computers</span>
            <span className='nav__fillText'>Books</span>
            <span className='nav__fillText'>Coupons</span>
            <span className='nav__fillText'>Toys & Games</span>
            <span className='nav__fillText'>Sell</span>
        </div>
        <div className='nav__right'></div>
    </div>
  )
}

export default UnderNavBar