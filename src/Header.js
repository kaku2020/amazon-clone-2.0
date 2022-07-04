import React from 'react';
import logo from './amazon.png';
import './Header.css' ;
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function Header() {
  return (
    <div className='header'>
        <img src={logo} className="header__logo" alt="logo" />
        <div className='header__optionBasket'>
                <LocationOnOutlinedIcon />
                
            </div>
            <div className = 'header__side'>
                <span className ='header__optionLineOne '> Hello </span>
                <span className='header__optionLineTwo '>Select your address</span>
                </div>
        <div className='header__search'>
           <button className='header__searchButton'>All</button>
            <input className='header__searchInput' type ="text"/>
            <div className='header__searchIconLogo'>
            <SearchIcon className='header__searchIcon'/>
            </div>
            <span></span>
        </div>
        <div className = 'header__nav'>
            <div className='header__option'>
                <span className ='header__optionLineOne'> Hello Guest</span>
                <span className='header__optionLineTwo'>Sign In</span>
            </div>
            <div className='header__option'>
                <span className ='header__optionLineOne'> Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className ='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__optionLineTwo header__basketCount'>0</span>

            </div>
        </div>
    </div>
    
  )
}

export default Header