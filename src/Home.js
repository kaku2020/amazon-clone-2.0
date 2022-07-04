import React from 'react';
import './Home.css';
import logo from './2x_Xbiz_march22_pc._CB627753471_.jpg';
import Product from './Product';

import ImageSilder from './ImageSilder';
import { SliderData } from './SliderData';
import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import { data } from './data';
import { data2 } from './data2';
import { data3 } from './data3';
import { data4 } from './data4';
import { data5 } from './data5';
import { data6 } from './data6';
import Product4 from './Product4';
import { data7 } from './data7';

function Home() {
  return (
    
    <div className='home'>
    <div classNmae='home__container'>
    <ImageSilder slides= {SliderData} data-interval="3000"/>
    {/* <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/BAU_Hero_2022/2x_Xbiz_march22_pc._CB627753471_.jpg" className="home__image" alt="logo" /> */}
    <div className='home__row'>
    <Product1  id ="12340997"
       title = "Up  to  70%  off     On |  Styles for Men" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
       des1 = "Clothing"
       des2 = "Footware"
       des3 ="Watches"
       des4 ="Bags & luggages" 
       link = "End of season sale"/>
      <Product1  id ="1234098087"
       title = "Up to 70% off | Styles for Women" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
       des1 = "Womens Clothing"
       des2 = "Footware+Handbags"
       des3 ="Watches"
       des4 ="Fashion jewellery" 
       link = "End of season sale"/>
        
        <Product1  id ="1238087"
       title = "Join Prime and enjoy multiple benefits" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/8_186x116._SY116_CB635844475_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/6_186x116._SY116_CB635844475_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/5_186x116._SY116_CB635844475_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/7_186x116._SY116_CB635844475_.jpg"
       des1 = "Free & Fast Delivery"
       des2 = "Prime Video"
       des3 ="Ad-free Music"
       des4 ="Get Unlimited 5% back every time you shop" 
       link = "End of season sale"/>
        <Product2 
       id= "1235454356468"
       title= "Up to 45% off | Top offers from Amazon Brand - Solimo"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
       link =  "Pay now"/>
    </div>
    <div className='home__row'>
    <Product2 
      id= "123546468"
      title= "Pay your credit card bills on Amazon"
      img= "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
      link =  "Pay now"
      />
       <Product1 id ="12340976587"
       title = "Car & bike essentials | Up to 60% off" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
       des1 = "Cleaning accessories"
       des2 = "Tyre & rim care"
       des3 ="Helmets"
       des4 ="Vaccum cleaner" 
       link = "See more"/>
      <Product1  id ="123404354997"
       title = "Cookware & dining" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
       des1 = "Gas stove"
       des2 = "Cookware"
       des3 ="Kitchen Storage"
       des4 ="Tableware" 
       link = "See more"/>
       <Product1 id ="12340987"
       title = "Upgrade your home | Amazon Brands & more" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
       des1 = "Smart LED TV"
       des2 = "Appliances"
       des3 ="Furniture"
       des4 ="Kitchen products" 
       link = "Shop now"/>
    </div>
    <div className='home__row'>
    <Product4 data= {data7} 
    text1 = "Today’s Deals" 
    text2 = "See all Deals"
    imgno ={6}
    imgnoscr = {5}/></div>
    <div className='home__row'><Product3 data= {data2} 
    text1 = "Up to 60% off | Glassware & dinnerware sets from local shops" 
    text2 = "See all offers"
    imgno ={6}
    imgnoscr = {5}/></div>
    <div className='home__row'>
    <Product2 
       id= "1235464687675"
       title= "Value Packs under ₹599 | Amazon Brands & more"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg"
       link =  "End of season sale"/>
        <Product1  id ="12340987"
       title = "Electronics devices for home office" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
       des1 = "Smart Watches and Fitness Tracker"
       des2 = "Tablets"
       des3 ="Laptops"
       des4 ="Monitors" 
       link = "See more"/>
        <Product1  id ="12340987"
       title = "Handpicked products for your baby" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_NB_1X._SY116_CB448757679_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Diapers_1X._SY116_CB448757679_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_Premium_1X._SY116_CB448757679_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/GW/Desktop/DesktopQC_AllBaby_1X._SY116_CB448757679_.jpg"
       des1 = "Newborn Baby Store"
       des2 = "Diapers and wipes"
       des3 ="Premium baby store"
       des4 ="All baby products" 
       link = "Explore All"/>
       <Product1 id ="12340976587"
       title = "Automotive essentials | Up to 60% off" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
       des1 = "Cleaning accessories"
       des2 = "Tyre & rim care"
       des3 ="Helmets"
       des4 ="Vaccum cleaner" 
       link = "See more"/>
    </div>
    <div className='home__row'><Product3 data= {data3} 
    text1 = "Up to 45% off | Handpicked furniture collection from local shops" 
    text2 = "See all offers"
    imgno ={6}
    imgnoscr = {5}/></div>
    <div className='home__row'><Product3 data= {data4} 
    text1 = "Up to 40% off | Refurbished activity trackers" 
    text2 = "See more"
    imgno ={7}
    imgnoscr = {5}/></div>
    <div className='home__row'>
    <Product1  id ="12340987"
       title = "Electronics devices for home office" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
       des1 = "Smart Watches and Fitness Tracker"
       des2 = "Tablets"
       des3 ="Laptops"
       des4 ="Monitors" 
       link = "See more"/>
    <Product2  
      id= "123468"
      title= "Up to 70% off | Clearance store"
      img= "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
      link =  "See more"
      />
      <Product2 
       id= "1235464687675"
       title= "Discover your home"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/img21/soumya/OHL/HnK/Discover_Home/CC/PC-CC-758X608._SY304_CB636614722_.jpg"
       link =  "See More"/>
       <Product1  id ="12340987"
       title = "Up to 45% off | Shop by Pet" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Dog_186X116._SY116_CB644270746_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/Cat_186X116._SY116_CB644270746_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/bird_186X116._SY116_CB644270746_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Pets/Aug/fish_186X116._SY116_CB644270746_.jpg"
       des1 = "Dog Supplies"
       des2 = "Cat Supplies"
       des3 ="Birds and Small Animals"
       des4 ="Aqurium accessories" 
       link = "See all deals"/>
    </div>
    <div className='home__row'><Product3 data= {data5} 
    text1 = "Up to 65% off | Summer hues home furnishing picks from local shops" 
    text2 ="See all offers"
    imgno ={6}
    imgnoscr = {5}/></div>
    <div className='home__row'><Product3 data= {data6} 
    text1 = "Up to 40% off | Men's footwear picks for the season from local shops" 
    text2 = "Explore more"
    imgno ={7}
    imgnoscr = {5}/></div>
     <div className='home__row'>
     <Product1 id ="12340987"
       title = "Upgrade your home | Amazon Brands & more" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Home_QC_1X_V2_2._SY116_CB636581721_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Furniture_1X_V2_4._SY116_CB636581721_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Daily_essentials_QC_1X_V2_1._SY116_CB636581721_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_Softlines_QC_1X_V2_5._SY116_CB636581721_.jpg"
       des1 = "Home Product"
       des2 = "Furniture"
       des3 ="Daily Essentials"
       des4 ="Clothing Essentials" 
       link = "Shop more"/>
     <Product2  
      id= "123468"
      title= "Echo dot with Alexa | Music, news & more"
      img= "https://images-eu.ssl-images-amazon.com/images/G/31/img19/DesktopQCandCC/1X_brownie_PcCC._SY304_CB646510445_.jpg"
      link =  "See more"
      />
      <Product2 
       id= "1235464687675"
       title= "4 star+ rated kitchen products | Amazon Brands & more"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/Kitchen_Appliances_cc_1X_V1_1._SY304_CB636573309_.jpg"
       link =  "Shop Now"/>
        <Product1 id ="12340987"
       title = "Top picks for your home" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
       des1 = "AC"
       des2 = "Refrigirator"
       des3 ="Microwave"
       des4 ="Washing Machine"
       link = "Shop now"/>
       
     </div>
    <div className='home__row'><Product3 data= {data} 
    text1 = "Up to 40% off | Men's footwear picks for the season from local shops" 
    text2 = "Explore more"
    imgno ={5}
    imgnoscr = {5}/></div>
    {/* <div className='home__row'>
      
      <Product2 
      id= "123546468"
      title= "Pay your credit card bills on Amazon"
      img= "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
      link =  "Pay now"
      />
      <Product2  
      id= "123468"
      title= "Up to 70% off | Clearance store"
      img= "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
      link =  "See more"
      />
      <Product2 
       id= "1235464687675"
       title= "Value Packs under ₹599 | Amazon Brands & more"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2021/wrs/mencombo_low._SY304_CB666768535_.jpg"
       link =  "End of season sale"/>
      <Product2 
       id= "1235454356468"
       title= "Up to 45% off | Top offers from Amazon Brand - Solimo"
       img= "https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_furniture_pc_cc_379x304_in-en._SY304_CB643322439_.jpg"
       link =  "Pay now"/>
    </div>
    <div className='home__row'>
      <Product1 id ="12340987"
       title = "Upgrade your home | Amazon Brands & more" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/TV_1x._SY116_CB627443840_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/PrivateBrands/GW20/GW_Desktop_QC_Appliances_1X_V2_3._SY116_CB636581536_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Furn_1x._SY116_CB627275939_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW/Kitchen_1x._SY116_CB627276315_.jpg"
       des1 = "Smart LED TV"
       des2 = "Appliances"
       des3 ="Furniture"
       des4 ="Kitchen products" 
       link = "Shop now"/>
      <Product1  id ="12340997"
       title = "Up  to  70%  off     On |  Styles for Men" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"
       des1 = "Clothing"
       des2 = "Footware"
       des3 ="Watches"
       des4 ="Bags & luggages" 
       link = "End of season sale"/>
      <Product1  id ="1234098087"
       title = "Up to 70% off | Styles for Women" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg"
       des1 = "Womens Clothing"
       des2 = "Footware+Handbags"
       des3 ="Watches"
       des4 ="Fashion jewellery" 
       link = "End of season sale"/>
      <Product1  id ="12340987"
       title = "Electronics devices for home office" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
       des1 = "Smart Watches and Fitness Tracker"
       des2 = "Tablets"
       des3 ="Laptops"
       des4 ="Monitors" 
       link = "See more"/>
    </div>
    <div className='home__row'>
      <Product1 id ="12340976587"
       title = "Car & bike essentials | Up to 60% off" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg"
       des1 = "Cleaning accessories"
       des2 = "Tyre & rim care"
       des3 ="Helmets"
       des4 ="Vaccum cleaner" 
       link = "See more"/>
      <Product1  id ="123404354997"
       title = "Cookware & dining" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__1_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__2_1573567224_jpg_LOWER_QL85_._SY116_CB448746415_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_3_copyx400x2C5x_1573713358_jpg_LOWER_QL85_._SY116_CB448746425_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/IN-hq/2019/img/Kitchen/XCM_Manual_186x116_1198417XCM_Manual_1198417__4_1573567224_jpg_LOWER_QL85_._SY116_CB448746450_.jpg"
       des1 = "Gas stove"
       des2 = "Cookware"
       des3 ="Kitchen Storage"
       des4 ="Tableware" 
       link = "See more"/>
      <Product1  id ="1238087"
       title = "Join Prime and enjoy multiple benefits" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/8_186x116._SY116_CB635844475_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/6_186x116._SY116_CB635844475_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/5_186x116._SY116_CB635844475_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/7_186x116._SY116_CB635844475_.jpg"
       des1 = "Free & Fast Delivery"
       des2 = "Prime Video"
       des3 ="Ad-free Music"
       des4 ="Get Unlimited 5% back every time you shop" 
       link = "End of season sale"/>
      <Product1  id ="12340987"
       title = "Electronics devices for home office" 
       img1 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg"
       img2 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg"
       img3 = "https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg"
       img4 ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg"
       des1 = "Smart Watches and Fitness Tracker"
       des2 = "Tablets"
       des3 ="Laptops"
       des4 ="Monitors" 
       link = "See more"/>
    </div>
     */}
    <div className='home__row'>
   
    {/* <Product id ="4903850"
                    title="Apple Watch
                    Midnight Aluminium Case with Sport Band" 
                    price={859}
                    rating={4} 
                    image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/45-nc-alum-midnight-sport-gray-s7?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631855766000"  />
                <Product id ="24567868"
                    title="Amazon Echo Dot (3rd Gen) - New and Improved Smart Speaker with Alexa, Black" 
                    price={399}
                    rating={3} 
                    image="https://www.reliancedigital.in/medias/Amazon-Echo-dot-3-0-BK-Computer-Speaker-491431035-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NjM2NHxpbWFnZS9qcGVnfGltYWdlcy9oYjUvaGY3LzkwNTk0NDcwNDYxNzQuanBnfGFlZjBlOTZkMzY4MmI0ZTBhMDMzZWRiMjM1MjE2OWYxYTFmZWMxMWJlNjY2YzI5Nzc4ODM0ZWU2MWNlYjY0ZjE"  />
                <Product id ="65213489"
                    title="Buy iPad Pro|12.9-inch iPad Pro|Silver|128GB1|Wi-Fi" 
                    price={1099}
                    rating={5} 
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104?wid=470&hei=556&fmt=p-jpg&qlt=95&.v=1617126619000"  /> */}
    </div>
    <div className='home__row'>
 
    {/* <Product id ="7821345"
                    title="86cm (34) Gaming Monitor with WQHD resolution" 
                    price={600}
                    rating={5} 
                    image="https://images.samsung.com/is/image/samsung/p6pim/in/lc34g55twwwxxl/gallery/in-odyssey-g5-34g5-lc34g55twwwxxl-467164472?$1300_1038_PNG$"  />
      <Product id ="12321341"
                    title="The Lean startup: How constant Innovation Creates Radically Successful Businesses Paperback" 
                    price={20.76}
                    rating={5} 
                    image="https://m.media-amazon.com/images/I/51WIKlio9qL.jpg"  />
                    <Product id ="49538094"
                    title="Kenwood kMix Stand Mixer for Baking , Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                    price={239.0}
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/716kTJI4jtL._SX425_.jpg"  /> */}
    </div>
    </div>
    </div>
  )
}

export default Home